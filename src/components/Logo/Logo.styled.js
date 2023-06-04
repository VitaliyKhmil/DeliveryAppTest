
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Logo = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: solid 1px #c9c7bd;
  cursor: pointer;
  &:hover {
    background-color: #dbd8ce;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const LogoIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  @media screen and (${breakpoints.tablet}) {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
`;

export const LogoText = styled.div`
  color: black;
  font-size: 15px;
  margin-right: 5px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 20px;
    margin-right: 5px;
    color: #d19a02;
  }
`;