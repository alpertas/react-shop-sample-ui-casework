import { Send } from '@material-ui/icons';
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from './styles/Newsletter.styled';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
