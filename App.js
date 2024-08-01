import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Provider, useDispatch } from 'react-redux';
import { store, persistor } from './src/store';
import AuthProvider from './src/navigation/AuthProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { setupProductsListener } from './src/store/actions/productActions';
import { StripeProvider } from '@stripe/stripe-react-native';
import {SP_KEY} from '@env'; 
import { Alert } from 'react-native';
const AppContent = () => {
  
  const dispatch = useDispatch();
console.log("spkey===>",SP_KEY);
  useEffect(() => {
    const unsubscribe = dispatch(setupProductsListener());
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <StripeProvider
      publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
}
