import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './Slicer';

const store = configureStore({
  reducer: {
    apiData: apiDataReducer, 
  },
});

export default store;
