import {
  ProductCardContainer,
  ButtonAdd,
  ImageCardProduct,
} from 'components/ProductCard/ProductCard.styled';

export const ProductCard = () => {
  return (
    <ProductCardContainer>
      <div>
        <ImageCardProduct />
        {/* <p>Burger</p> */}
        <ButtonAdd>add to Card</ButtonAdd>
      </div>
    </ProductCardContainer>
  );
};
