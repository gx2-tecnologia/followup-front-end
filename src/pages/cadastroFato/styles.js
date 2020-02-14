import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  background-color: #fff;
  width: 300px;
  margin: 0 auto;

  h1{
    font-size: 30px;
    text-align: center;
  }

  display: flex;
  flex-direction: column;

  }

  .MuiFormControl-root{
    margin-bottom:15px;
  }

  label{
    cursor: pointer;
    div{
      display: flex;
      align-items: baseline;
      color: #949494;
    }
        &:hover {
          color: 'black';
          p {
            font-weight: bold;
          }
        }

    p{
      font-size:15px;
      margin-left:5px;
      font-weight: normal;
    }

  }

  .inputArquivo {
    /* display: none; */

  }
`;

export const Container = styled.div`
  background-color: #fff;
  padding-bottom: 30px;
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;

  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349019607843);
  background-color: #ffffff;

  h1 {
    font-size: 30px;
    text-align: center;
  }

  .BtnEnviar {
    margin-left: 59%;
    margin-top: 10px;
  }
`;

export const Table = styled.div`
  margin-top: 20px;
`;
