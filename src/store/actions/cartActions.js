import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { addToCart as addToCartService, getCartItems as getCartItemsService, subscribeToCart as subscribeToCartService, deleteFromCart as deleteFromCartService } from '../../services/backend/cart';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addToCart = createAsyncThunk('cart/addToCart', async (product, { rejectWithValue }) => {
  try {
    await addToCartService(product);
    return product;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const user = auth().currentUser;

  if (!user) {
    throw new Error('User not authenticated');
  }

  const cartRef = firestore().collection('cart').doc(user.uid);
  const cartDoc = await cartRef.get();

  if (cartDoc.exists) {
    const data = cartDoc.data();
    // Assuming items is an array in your cart document
    return data.items || [];
  } else {
    return []; // Return an empty array if cart does not exist
  }
});


export const deleteFromCart = createAsyncThunk('cart/deleteFromCart', async (productId, { rejectWithValue }) => {
    try {
        const updatedItems = await deleteFromCartService(productId);
        return updatedItems; // Return updated items for Redux state
    } catch (error) {
        return rejectWithValue(error.message);
    }

});

export const setCartItems = createAction('cart/setCartItems');

export const subscribeToCart = () => (dispatch) => {
  subscribeToCartService((items) => {
    dispatch(setCartItems(items));
  });
};
