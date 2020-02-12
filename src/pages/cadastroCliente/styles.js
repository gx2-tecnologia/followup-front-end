import styled from 'styled-components';

export const Content = styled.div`
  background-color: #fff;
  width: 300px;
  padding: 20px;
  margin: 0 auto;

  h2{
    font-size: 30px;
  }

  display: flex;
  flex-direction: column;

  }

  .MuiFormControl-root{
    margin-bottom:15px;
  }

  label{
    /* margin-top: 15px; */
    text-align:center;
  }

  .inputArquivo {
    display: none;

  }
`;

export const Container = styled.div`
  background-color: #dcdcdc;
  padding-bottom: 30px;
  width: 70%;
  h2 {
    margin-left: 20%;
  }

  .BtnEnviar {
    margin-left: 59%;
    margin-top: 10px;
  }
`;
