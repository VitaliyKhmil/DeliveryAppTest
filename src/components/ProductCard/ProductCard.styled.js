import styled from 'styled-components';


export const ProductCardContainer = styled.li`
  border: solid 1px;
  width: 220px;
  height: 220px;
  margin: 20px;
  border-radius: 40px;
  border: solid 1px #c9c7bd;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around; 
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px;
  justify-content: center;
  padding: 2px;
`;

export const ImageCardProduct = styled.img`
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;

`;
