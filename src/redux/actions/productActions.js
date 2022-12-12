import { GET_PRODUCTS, PRODUCTS_ERROR } from '../action-types';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://https://dummyjson.com/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};
