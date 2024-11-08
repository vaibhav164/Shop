import axios from 'axios';
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../constants';


// Action Creators
const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
const fetchProductsFailure = (error) => ({ type: FETCH_PRODUCTS_FAILURE, payload: error });

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(fetchProductsSuccess(response.data));
      console.log('response_____', response)
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
  // try {
  //   return async (dispatch: (arg0: { type: string; payload: any; }) => void)=>{
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     const products = response.data;
  //     if(response.data){
  //   dispatch(fetchProductsSuccess(response.data));
  //     }else{
  //       dispatch(fetchProductsFailure(error.message));
  //     }
  //   console.log("valuess_______", products)
  // }}catch (error) {
  //     console.log(error)
  // }
