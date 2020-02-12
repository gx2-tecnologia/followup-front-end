import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function CadastroCompetencia() {
  return (
    <Container>
      <h2>Cadastro de Competência</h2>

      <Content>
        <TextField
          id="standard-basic"
          label="Descrição da Competência"
          onChange={() => {}}
          required
        />
      </Content>
      <Button
        variant="contained"
        color="primary"
        className="BtnEnviar"
        onClick={() => {}}
      >
        Enviar
      </Button>
    </Container>
  );
}
