import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 90%;
  height: 50vh;
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
  letter-spacing: 0.2rem;
`;

const Form = styled.div`
  font-weight: 100;
  font-size: 16px;
  margin: 0 auto;
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  display: flex;
`;
const CheckOutButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    color: white !important;
    background-color: #2e384d;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.24),
      0 4px 15px 0 rgba(0, 0, 0, 0.19);
  }
`;

export {
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
};
