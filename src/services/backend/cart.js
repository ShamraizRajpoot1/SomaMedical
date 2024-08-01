import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addToCart = async (product) => {
  const user = auth().currentUser;
  if (user) {
    const cartRef = firestore().collection('cart').doc(user.uid);
    const cartDoc = await cartRef.get();
    const productWithQuantity = { ...product,address: 1 };

    if (cartDoc.exists) {
      const existingItems = cartDoc.data().items || [];
      const existingProductIndex = existingItems.findIndex(item => item.id === product.id);

      if (existingProductIndex >=0  ) {
        existingItems[existingProductIndex].quantity += 1;
      } else {
        existingItems.push(productWithQuantity);
      }

      try {
        await cartRef.update({
          items: existingItems,
        });
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    } else {
      try {
        await cartRef.set({
          items: [productWithQuantity],
        });
      } catch (error) {
        console.error('Error creating cart:', error);
      }
    }
  } else {
    throw new Error('User not authenticated');
  }
};

export const getCartItems = async () => {
  const user = auth().currentUser;
  if (user) {
    const cartRef = firestore().collection('cart').doc(user.uid);
    const cartDoc = await cartRef.get();
    return cartDoc.exists ? cartDoc.data().items : [];
  } else {
    throw new Error('User not authenticated');
  }
};

export const deleteFromCart = async (productId) => {
  const user = auth().currentUser;
  if (user) {
    const cartRef = firestore().collection('cart').doc(user.uid);
    const cartDoc = await cartRef.get();

    if (cartDoc.exists) {
      const currentItems = cartDoc.data().items || [];
      const updatedItems = currentItems.filter(item => item.id !== productId);

      await cartRef.update({
        items: updatedItems,
      });
      return updatedItems;
    } else {
      console.error('Cart document does not exist.');
    }
  } else {
    throw new Error('User not authenticated');
  }
};

export const subscribeToCart = (callback) => {
  const user = auth().currentUser;
  if (user) {
    const cartRef = firestore().collection('cart').doc(user.uid);
    return cartRef.onSnapshot((doc) => {
      if (doc.exists) {
        callback(doc.data().items || []);
      } else {
        callback([]);
      }
    });
  } else {
    throw new Error('User not authenticated');
  }
};
