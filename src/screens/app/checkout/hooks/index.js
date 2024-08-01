import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { navigate } from "../../../../navigation/rootNavigation";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal } from "../../../../store/selectors/cartSelector";
import { fetchCartItems } from "../../../../store/actions";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { initStripe, useStripe } from '@stripe/stripe-react-native';
import {SS_KEY} from '@env'
import { routes } from "../../../../services";
export function useHooks(props) {
  const [isVisible, setVisible] = useState(false);
  const [card, setCard] = useState([]);
  const [cardDetails, setCardDetails] = useState({});
  const [cardDataComplete, setCardDataComplete] = useState(false);
  const { confirmPayment } = useStripe();
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector((state) => state.cart.items);
  const [addresses, setAddresses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth().currentUser;

      if (user) {
        try {
          const docRef = firestore().collection('CardInfos').doc(user.uid);
          const doc = await docRef.get();

          if (doc.exists) {
            const cardInfo = doc.data();
            setCard(cardInfo);
          }
        } catch (error) {
          console.error(error);
          Alert.alert('Failed to fetch card info', error.message);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const user = auth().currentUser;

      try {
        const addressDocRef = firestore().collection('Address').doc(user.uid);
        const doc = await addressDocRef.get();

        if (doc.exists) {
          const currentData = doc.data().data || [];
          setAddresses(currentData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleProducts = () => {
    navigate(routes.home);
  };

  const paymentMethod = () => {
    navigate(routes.paymentMethod);
  };

  const address = () => {
    navigate(routes.address);
  };

  const toggle = () => {
    setVisible(!isVisible);
  };

  const toggleSelection = (id) => {
    setSelectedId(id);
  };

  const maskCardNumber = (number) => {
    if (!number || number.length < 4) {
      return number; // If the number is too short, return it as is
    }
    return number.slice(-4);
  };

  const maskedNumber = maskCardNumber(card.number);

  const handlePayment = async () => {
    const user = auth().currentUser;
    const amount = (cartTotal + 10) * 100; // Convert to cents

    try {
      // Directly using the secret key for testing purposes
      const paymentIntentResponse = await fetch(
        'https://api.stripe.com/v1/payment_intents',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${SS_KEY}`, // Replace with your actual test secret key
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `amount=${amount}&currency=usd&payment_method_types[]=card`,
          
        },
      );
      console.log("payment===",paymentIntentResponse);
      if (!paymentIntentResponse.ok) {
        // Handle non-200 responses
        const errorResponse = await paymentIntentResponse.json();
        throw new Error(
          `Failed to create PaymentIntent: ${errorResponse.error.message}`,
        );
      }

      const paymentIntent = await paymentIntentResponse.json();
      const clientSecret = paymentIntent.client_secret;
      // console.log("payment===>",clientSecret);
      if (!clientSecret) {
        throw new Error('Failed to create PaymentIntent');
      }

      // Dummy card details
      const cardDetails = {
        number: '4242424242424242',
        exp_month: 4,
        exp_year: 2024,
        cvc: '242',
      };

      const billingDetails = {
        email: 'fakeemail@gmail.com',
        name: 'Test',
      };

      // Confirm the payment directly with Stripe SDK
      const { paymentIntent: confirmIntent,error,  } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
            token: 'tok_visa' 
        }
    });

      if (error) {
        Alert.alert('Payment failed', error.message);
        console.log(error);
      } else if (confirmIntent) {
        Alert.alert('Payment successful', 'Your payment was successful!');

        // Store payment information in Firestore
        const paymentInfo = {
          userId: user.uid,
          amount: confirmIntent.amount / 100, // Convert back to dollars
          currency: confirmIntent.currency,
          status: confirmIntent.status,
          paymentMethod: confirmIntent.paymentMethod,
          created: confirmIntent.created,
        };

        await firestore().collection('Payments').add(paymentInfo);

        setVisible(false);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Payment failed', error.message);
    }
  };
  useEffect(() => {
    async function initialize() {
      await initStripe({
        publishableKey: SP_KEY,
      });
    }
    initialize().catch(console.error);
  }, []);
  return {
    cartItems,
    card,
    maskedNumber,
    cartTotal,
    address,
    paymentMethod,
    toggle,
    toggleSelection,
    selectedId,
    addresses,
    isVisible,
    handleProducts,
    handlePayment,
    setCardDataComplete
  };
}
