import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productApi } from "./features/apiSlice";
import {
  Home,
  ProductList,
  Register,
  Login,
  Cart,
  ProductDetail,
} from "./pages/index";

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={productApi}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={console.log("nopage")}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="productlist" element={<ProductList />} />
              <Route path="productdetail" element={<ProductDetail />} />
              <Route path="*" element={console.log("nopage")} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  );
};

export default App;

//
//
//
//
//
// Trash
//import Product from "./pages/Product";
/*
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
*/
