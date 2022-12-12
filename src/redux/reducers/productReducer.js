/* eslint-disable import/no-anonymous-default-export */
import { GET_PRODUCTS } from '../action-types';

const initialState = {
  products: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
