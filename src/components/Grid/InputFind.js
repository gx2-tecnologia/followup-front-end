import styled from 'styled-components';

export const ContainerMain = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const ContainerHeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;

  svg {
    color: #e0e0e0;
    border-radius: 5px;
    vertical-align: middle;
  }

  p {
    font-weight: 600;
  }
  form,
  input {
    height: 100%;
  }
`;

export const FormFindField = styled.form`
  border-radius: 5px;
  border: 1px solid #c4c4c4;
`;

export const ButtonFindField = styled.button`
  border: 0;
  background-color: inherit;
  width: 30px;
`;
export const ContainerHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;

  p {
    margin-right: 10px;
  }
`;

export const InputFind = styled.input`
  padding: 10px;
  color: #c4c4c4;
  font-size: 12px;
  border: 0;
  border-right: 1px solid;
`;

export const SelectField = styled.select`
  padding: 10px 0px;
  margin-left: 5px;
  margin-right: 10px;
  border: 1px solid #c4c4c4;
  font-size: 12px;
  text-align-last: center;
  border-radius: 5px;
`;

export const ContainerFloatLeft = styled.div`
  text-align: left;
  p {
    font-size: 12px;
  }
`;
