import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 700px;
  margin: 10px auto;

  div.divForm {
    border-radius: 10px;
    padding: 80px 50px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349019607843);
    background-color: #ffffff;

    h1 {
      font-family: Raleway, sans-serif;
      font-size: 30px;
      font-weight: 550;
      text-align: center;

      margin: 40px 20px;
    }
  }
  input {
    width: 80%;
    margin-bottom: 24px;
    margin-left: 10%;
    padding: 10px 15px;
    border: 1px solid #cfcfcf;
    outline: 0;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 14px;
    background-color: #fff;
    color: #797979;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  button {
    font-family: Raleway, sans-serif;
    height: 35px;
    width: 20%;
    background-color: #0faba8;
    margin: 0 40%;
    border: none;
    border-radius: 3px;
    color: #fff;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
      color: #0faba8;
    }
  }
`;
