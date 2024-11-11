import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price:number;
  quantity:number;
  rating: {
      count: number;
      rate: number;
  },
  title: number;
}
interface CartProduct {
  product: Product;
  quantity: number;
}
interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    addMultipleQuantityToCart: (state, action: PayloadAction<{ product:Product, quantity:number}>) => {
      const { product, quantity } = action.payload;

      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    
    updateCartQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === productId
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, addMultipleQuantityToCart } = cartSlice.actions;
export default cartSlice.reducer;