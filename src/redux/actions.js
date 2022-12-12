import { ActionTypes } from './action-types';

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { withRouter, Route, Link } from 'react-router-dom';
import store from './store';

let fetchDataAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [
      {
        id: "Front",
        content: "1)Best Front technologies",
        subpages: [
          { id: "React", content: "1.1 React is great to manage views" },
          { id: "Redux", content: "1.2 Redux is a great store" },
        ],
      },
      {
        id: "Back",
        content: "1)Best Back technologies",
        subpages: [
          { id: "Symfony", content: "Most mature PHP Framework " },
          { id: "GraphQL", content: "Next step web Transport" },
        ],
      },
    ];
    resolve(data);
  }, 1000);
});

function getPagesAction() {
  return function (dispatch) {
    // Send an action before fetch
    dispatch({
      type: "GET_PAGES",
      status: "fetching",
    });
    fetchDataAsync.then((data) => {
      if (data.error) {
        // Send Action if error
        dispatch({
          type: "GET_PAGES_ERROR",
          status: "error",
        });
      } else {
        // Send Action and attach our data
        dispatch({
          type: "GET_PAGES_DONE",
          status: "fetched",
          payload: data,
        });
      }
    });
  };
}
*/
