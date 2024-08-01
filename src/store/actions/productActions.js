
import { createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import { setProducts } from '../reducers/productReducers';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const productCollection = await firestore().collection('Products').get();
    let allProducts = [];
    productCollection.forEach(doc => {
      const data = doc.data();
      if (data.products && Array.isArray(data.products)) {
        allProducts = [...allProducts, ...data.products];
      }
    });
    return allProducts;
  }
);

export const setupProductsListener = () => (dispatch) => {
  return firestore().collection('Products').onSnapshot(snapshot => {
    let allProducts = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.products && Array.isArray(data.products)) {
        allProducts = [...allProducts, ...data.products];
      }
    });
    dispatch(setProducts(allProducts));
  });
};
