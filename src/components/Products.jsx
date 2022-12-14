import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import { useGetProductsOfACategoryQuery } from '../features/apiSlice';
import { Container } from './styles/Products.styled';

const Products = (props) => {
  const { data, error, isError, isLoading } =
    useGetProductsOfACategoryQuery('womens-dresses');
  console.log(data);
  if (isLoading) {
    return (
      <MutatingDots
        height='100'
        width='100'
        color='#4fa94d'
        secondaryColor='#4fa94d'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    );
  }
  return (
    <Container>
      {data.products.length > 0
        ? data?.products.map((item) => <Product item={item} id={item.id} />)
        : console.log('product list is empty')}
    </Container>
  );
};

export default Products;
