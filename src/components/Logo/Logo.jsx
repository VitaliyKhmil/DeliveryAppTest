import logoIcon from '../img/food_logo.png';
import { Logo, LogoText, LogoIcon } from './Logo.styled';

export const AppLogo = () => {
  return (
    <Logo to="/dashboard">
      <LogoIcon src={logoIcon} alt="wallet-icon" />
      <LogoText>Shope FooD</LogoText>
    </Logo>
  );
};
