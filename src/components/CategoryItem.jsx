import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  Info,
  Title,
  Button,
} from './styles/CategoryItem.styled';

const CategoryItem = ({ item }) => {
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <Container>
      <Image />
      <Info>
        <Title>{item.title}</Title>
        <Link to='productlist' style={linkStyle}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
