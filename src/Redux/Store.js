import { configureStore } from '@reduxjs/toolkit';
import ProductListReducer from './ProductListSlice';
import CartItemReducer from './ProductListSlice';

const store = configureStore({
  reducer: {
    productListData: ProductListReducer,
    cartItemList:  CartItemReducer
  },
});

export default store;
