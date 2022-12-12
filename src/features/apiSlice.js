import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (product) => 'products/search?q=' + product,
    }),
    getProductWithID: builder.query({
      query: (id) => 'products/' + id,
    }),
    getLimitedProducts: builder.query({
      query: (count) => 'products/limit?q=' + count,
    }),
    getAllProductsCategory: builder.query({
      query: () => 'products/categories',
    }),
    getProductsOfACategory: builder.query({
      query: (categoryName) => 'products/category/' + categoryName,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetProductWithIDQuery,
  useGetLimitedProductsQuery,
  useGetAllProductsCategoryQuery,
  useGetProductsOfACategoryQuery,
} = productApi;
/*
Query Explanation
getAllProducts: Fetch every product in JSON
getProduct: Fetch spesific product (ex: iphone)
getProductWithID: Fetch spesific product with its id
getLimitedProducts: Determines the number of products fetched
getAllProductsCategory: Calls every categories in JSON
getProductsOfACategory: Returns only specific category products.(ex: Smartphones,...)
*/
