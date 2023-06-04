import { AppLogo } from '../Logo/Logo';
import { HeaderWrapper, HeaderMenu } from './Header.style';
import { Title } from 'components/ui/Container';
import { Container } from "components/ui/Container";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderMenu>
          <AppLogo />
          <Title>Shope Page</Title>
        </HeaderMenu>
      </Container>
    </HeaderWrapper>
  );
};
