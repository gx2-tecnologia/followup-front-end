import styled from 'styled-components';

export const ButtonPadrao = styled.button`
  background-color: rgba(0, 138, 152, 1);
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  width: 160px;
  height: 50px;
  border-width: 0px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  a {
    color: #fff;
    &:hover {
      background-color: rgba(0, 138, 152, 1);
      color: #fff;
    }
  }
  svg {
    margin-right: 5px;
  }
`;
