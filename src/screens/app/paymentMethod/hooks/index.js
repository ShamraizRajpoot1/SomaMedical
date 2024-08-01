import { useEffect, useState } from "react"
// import { useStripe } from '@stripe/stripe-react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { navigate } from "../../../../navigation/rootNavigation";
import { routes } from "../../../../services";
import { Alert } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";
export function useHooks(props) {

  const { createPaymentMethod } = useStripe();
    const [cardName, setCardName] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [paymentMethodId, setPaymentMethodId] = useState(null);
    
    
     
    
      
   
      // const [cardName, setCardName] = useState('');
      // const [number, setNumber] = useState('');
      // const [expiry, setExpiry] = useState('');
      // const [cvv, setCvv] = useState('');
    
      const saveData = async () => {
        try {
          const [expMonth, expYear] = expiry.split('/');
          const billingDetails = {
            email: auth().currentUser.email,
            name: cardName,
          };
    
          const response = await fetch('https://api.stripe.com/v1/payment_methods', {
            method: 'POST',
            headers: {
              Authorization: `Bearer sk_test_51PhQpdLhIRO7riQUhe91ot7UoOiMSuNCeWiMIBKDomvsU3MDcaHiQwczzaLkNgpkm93n1VXWjILmm3KdXuXZuy7c008ro6meZ1`, // Replace with your actual test secret key
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              type: 'card',
              'card[number]': number,
              'card[exp_month]': expMonth,
              'card[exp_year]': expYear,
              'card[cvc]': cvv,
              'billing_details[email]': billingDetails.email,
              'billing_details[name]': billingDetails.name,
            }).toString(),
          });
    
          if (!response.ok) {
            console.log("rola====",response);
            const errorResponse = await response.json();
            throw new Error(`Failed to create PaymentMethod: ${errorResponse.error.message}`);
          }
    
          const paymentMethod = await response.json();
          const paymentMethodId = paymentMethod.id;
    
          if (!paymentMethodId) {
            throw new Error('Failed to create PaymentMethod');
          }
    
          // Save paymentMethod.id to Firestore or any other database
          await firestore().collection('users').doc(auth().currentUser.uid).update({
            paymentMethodId,
          });
    
          Alert.alert('Card saved successfully');
        } catch (error) {
          console.error(error);
          Alert.alert('Failed to save card', error.message);
        }
      };
    
      useEffect(() => {
        const fetchData = async () => {
          const user = auth().currentUser;
      
          if (user) {
            try {
              const docRef = firestore().collection('CardInfos').doc(user.uid);
              const doc = await docRef?.get();
      
              if (doc.exists) {
                const cardInfo = doc.data();
      
                setCardName(cardInfo.cardName || '');
                setNumber(cardInfo.number || '');
                setExpiry(cardInfo.expiry || '');
                setCvv(cardInfo.cvv || '');
              }
            } catch (error) {
              console.error(error);
              Alert.alert('Failed to fetch card info', error.message);
            }
          }
        };
      
        fetchData();
      }, []);
      
      // const saveData = async () => {
      //   const user = auth().currentUser;
      
      //   if (!cardName || !number || !expiry || !cvv) {
      //     Alert.alert('Please complete all fields');
      //     return;
      //   }
      
      //   try {
      //     const cardInfo = {
      //       cardName: cardName,
      //       number: number,
      //       expiry: expiry,
      //       cvv: cvv,
      //     };
      
      //     const docRef = firestore().collection('CardInfos').doc(user.uid);
      //     await docRef.set(cardInfo);
      
      //   //   Alert.alert('Card Info Saved');
      //     navigate(routes.checkout)
      //   } catch (error) {
      //     console.error(error);
      //     Alert.alert('Failed to save card info', error.message);
      //   }
      // };
      
    return {cardName,saveData, setCardName,number, setNumber, expiry, setExpiry, cvv, setCvv}
}