// src/store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './auth';
import productsReducer from './productReducers';
import cartReducers from './cartReducers';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // blacklist: ['nowPlaying'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productsReducer,
  cart: cartReducers,
});

export default rootReducer;
