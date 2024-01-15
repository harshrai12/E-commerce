

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price, image } = action.payload;
      state.cart.push({
        id,
        name,
        price,
        image,
        quantity: 1, 
      });
      state.totalAmount += price;
    },
    removeFromCart(state, action) {
      const productIdToRemove = action.payload;
      const removedProduct = state.cart.find((product) => product.id === productIdToRemove);

      if (removedProduct) {
        state.totalAmount -= removedProduct.price * removedProduct.quantity;
        state.cart = state.cart.filter((product) => product.id !== productIdToRemove);
      }
    },
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const product = state.cart.find((item) => item.id === productId);
    
      if (product) {
        
        state.totalAmount += quantity * product.price;
    
       
        if (!isNaN(quantity)) {
         
          product.quantity += quantity;
    
          if (product.quantity === 0) {
            state.cart = state.cart.filter((item) => item.id !== productId);
          }
        }
      }
    }
  }    
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;


