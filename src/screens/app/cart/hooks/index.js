import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../../../../navigation/rootNavigation"
import { appImages, routes } from "../../../../services"
import { deleteFromCart, fetchCartItems, subscribeToCart } from "../../../../store/actions/cartActions";
import { useEffect } from "react";
import { selectCartTotal } from "../../../../store/selectors/cartSelector";

export function useHooks() {
    const Checkout = () =>{
        navigate(routes.checkout)
    }
    const cartTotal = useSelector(selectCartTotal);
    const handleDelete = async (productId) => {
        try {
          dispatch(deleteFromCart(productId));
        } catch (error) {
          console.error('Failed to delete item from cart:', error);
          Alert.alert('Error', 'Failed to delete item from cart');
        }
      };

      const dispatch = useDispatch();
      const cartItems = useSelector((state) => state.cart.items);
      
console.log(cartItems);

useEffect(() => {
   dispatch(fetchCartItems());

   const unsubscribe = dispatch(subscribeToCart());
   return () => unsubscribe();
  }, [dispatch]);
    
    return {cartItems, Checkout, handleDelete, cartTotal}
} 