import styled from 'styled-components';

export const ShopeButton = styled.button`
  cursor: pointer;
  width: 80%;
  height: 30px;
  align-items: center;
  border-radius: 10px;
  border: solid 1px #c9c7bd;
  justify-content: center;
  margin-bottom: 15px;
  &:hover {
    background-color: #dbd8ce;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const ShopeCompanyList = styled.div`
  align-items: center;
  border-radius: 10px;
  border: solid 1px #c9c7bd;
  width: 300px;
  justify-content: center;
  display: block;
  padding-left: 10px;
  margin: 20px 20px 20px 20px;
`;

 export const TitleShope = styled.h3`
   display: block;
   font-weight: 400;
   font-size: 25px;
   color: gray;
   margin-bottom: 15px;
   justify-content: center;
 `;