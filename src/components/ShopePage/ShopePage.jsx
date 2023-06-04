import {
  ShopePageContainer,
} from 'components/ShopePage/ShopePage.styled';
import { ShopeCompany } from 'components/ShopsCompany/ShopeCompany';
import { ShopCompanyProduct } from 'components/ShopCompanyProduct/ShopCompanyProduct';
import { Container } from 'components/ui/Container';


export const ShopePage = () => {
  return (
    <Container>
      <ShopePageContainer>
        <ShopeCompany />
        <ShopCompanyProduct />
      </ShopePageContainer>
    </Container>
  );
};
