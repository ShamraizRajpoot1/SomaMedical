import { createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchCartItems, setCartItems, deleteFromCart } from '../actions/cartActions';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        const product = action.payload;
        const existingProductIndex = state.items.findIndex(item => item.id === product.id);

        if (existingProductIndex>=0) {
          state.items[existingProductIndex];
        } else {
          state.items.push(product);
        }
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(setCartItems, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.items = action.payload; // Update the cart items with the new list
    })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
