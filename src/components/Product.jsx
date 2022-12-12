import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import {
  Info,
  Container,
  Circle,
  Image,
  Icon,
  Button,
} from './styles/Product.styled';

const Product = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate('/productdetail?id=' + id);
  };
  return (
    <Container>
      <Circle />
      <Image src={item.thumbnail} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Button onClick={() => handleClick(item.id)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default Product;
