import React, { useState } from 'react';

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  Form,
  ValueButton,
  CountSelector,
  CheckOutButton,
} from './styles/ProductDetails.styled';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGetProductWithIDQuery } from '../features/apiSlice';

const ProductDetail = (props) => {
  // increase decrease button state
  const [count, setCount] = useState(1);
  const search = window.location.search;

  const query = new URLSearchParams(search);
  const id = query.get('id');
  // get data
  const { data, error, isError, isLoading } = useGetProductWithIDQuery(id);
  // increment decrement functions

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }
  ///////////////////////////////// TEST
  const slideImages = [
    {
      url: 'images/slide_2.jpg',
      caption: 'Slide 1',
    },
    {
      url: 'images/slide_3.jpg',
      caption: 'Slide 2',
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'Slide 3',
    },
  ];
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={data?.images[0]} />
          </ImgContainer>
          <InfoContainer>
            <Title>{data?.title}</Title>
            <Desc>{data?.description}</Desc>
            <Price>
              {data?.price}
              <span>&#8378;</span>
            </Price>
            <Form>
              <ValueButton side='Left' id='increase' onClick={increment}>
                +
              </ValueButton>
              <CountSelector>{count}</CountSelector>
              <ValueButton side='Right' id='decrease' onClick={decrement}>
                -
              </ValueButton>
            </Form>
            <CheckOutButton
              onClick={console.log(
                'check out clicked and ' + count + ' items added to basket'
              )}
              type='filled'
            >
              ADD TO BASKET
            </CheckOutButton>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
