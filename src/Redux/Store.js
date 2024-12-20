import { configureStore } from '@reduxjs/toolkit';
import ProductListReducer from './ProductListSlice';
import CartItemReducer from  './CartItemsSlice';

const store = configureStore({
  reducer: {
    productListData: ProductListReducer,
    cartItemList:  CartItemReducer
  },
});

export default store;
