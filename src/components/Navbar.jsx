import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from './styles/Navbar.styled';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to='register' style={linkStyle}>
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='login' style={linkStyle}>
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='cart' style={linkStyle}>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
