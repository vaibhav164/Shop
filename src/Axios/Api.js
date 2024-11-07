import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export const getProducts = () => {
  return api.get(); 
};
