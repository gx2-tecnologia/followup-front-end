import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';

import { Container, Content } from './styles';

export default class CadastroCompetencia extends React.Component {
  sytate = {
    description: null,
  };

  handleSend = e => {
    const { description } = this.state;

    if (description) {
      this.handleRequest();
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleRequest() {
    const { description } = this.state;
    const response = api
      .post('/competencias/', {
        descricao: description,
      })
      .then(
        response => {
          console.log(response);
          alert('Dados Enviados com sucesso.');
        },
        error => {
          console.log(error);
          alert('Serviço indisponível');
        }
      );
    console.log('teste', response);
  }
  render() {
    return (
      <Container>
        <h1>Cadastro de Competência</h1>

        <Content>
          <TextField
            id="standard-basic"
            label="Descrição da Competência"
            onChange={e => {
              this.setState({
                ...this.state,
                description: e.target.value,
              });
            }}
            required
          />
        </Content>
        <Button
          variant="contained"
          color="primary"
          className="BtnEnviar"
          onClick={this.handleSend}
        >
          Enviar
        </Button>
        {console.log(this.state)}
      </Container>
    );
  }
}
