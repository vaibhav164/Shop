import axios from 'axios';
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../constants';

const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
const fetchProductsFailure = (error) => ({ type: FETCH_PRODUCTS_FAILURE, payload: error });

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
