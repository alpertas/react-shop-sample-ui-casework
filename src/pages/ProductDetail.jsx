/* eslint-disable no-unused-vars */
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
  // console.log(id);
  /*
  for (var i = 0; i < data?.products.length; i++) {
    var obj = data?.products[id - 1];
    console.log(`id: ${obj.id}, title: ${obj.title}`);
  }
*/
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
  /////////////////////////////////
  const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
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

// Old styled file before seperated
/*
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 40%;
  height: 30vh;
  object-fit: contain;
  ${mobile({ height: "10vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Form = styled.div`
  font-weight: 100;
  font-size: 16px;
  margin: 0 auto;
  padding-top: 5px;
  display: flex;
`;
const ValueButton = styled.div`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  transition: 0.3s;
  user-select: none;
  &:hover {
    color: white !important;
    font-size: 90;
    background-color: #2e384d;
    border-radius: 10px;
  }
  border-radius: ${({ side }) =>
    (side === "Left" && "8px 0 0 8px") || (side === "Right" && "0 8px 8px 0")};
`;
const CountSelector = styled.div`
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
`;
*/
