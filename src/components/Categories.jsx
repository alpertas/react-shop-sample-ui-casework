import { MutatingDots } from 'react-loader-spinner';
import CategoryItem from './CategoryItem';
import { useGetAllProductsCategoryQuery } from '../features/apiSlice';
import { Container } from './styles/Categories.styled';

const Categories = () => {
  const {
    data: category,
    error,
    isError,
    isLoading,
  } = useGetAllProductsCategoryQuery();
  console.log(category);
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
      {category.slice(8, 11).map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
