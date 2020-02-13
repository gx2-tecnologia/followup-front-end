import styled from 'styled-components';

export const ButtonUnDefault = styled.button`
  cursor: pointer;
  width: 160px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border: solid 1px rgba(0, 138, 152, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #008a98;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;

  &:hover {
    background-color: rgba(0, 138, 152, 1);
    color: #fff;
  }
  svg {
    margin-right: 5px;
  }
`;

export default ButtonUnDefault;
