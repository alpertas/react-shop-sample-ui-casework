/* eslint-disable default-case */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

function reducer(
  state = {
    status: "notset",
    pages: [
      {
        id: "",
        content: "",
        subpages: [
          {
            id: "",
            content: "",
          },
        ],
      },
    ],
  },
  action
) {
  console.log("fire reducer");
  switch (action.type) {
    case "GET_PAGES": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "GET_PAGES_ERROR": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "GET_PAGES_DONE": {
      return {
        ...state,
        status: action.status,
        pages: action.payload,
      };
    }
  }
  return state;
}

const middleware = applyMiddleware(thunk, promise(), logger);
export default createStore(reducer, middleware);
