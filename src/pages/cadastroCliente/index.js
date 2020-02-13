import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';

import { Container, Content } from './styles';

export default class cadastroCliente extends React.Component {
  state = {
    razaoSocial: '',
    gestor: '',
    arquivo: null,
  };

  handleReadArq = e => {
    this.setState({ arquivo: e.target.value });
  };

  handleRazaoSocial = e => {
    this.setState({ razaoSocial: e.target.value });
  };
  handleGestor = e => {
    this.setState({ gestor: e.target.value });
  };

  handleSend = e => {
    const { razaoSocial, gestor, arquivo } = this.state;

    if (razaoSocial && gestor && arquivo) {
      this.handleRequest();
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleRequest() {
    const { razaoSocial, gestor, arquivo } = this.state;

    const response = api
      .post('/clientes/', {
        razaoSocial: razaoSocial,
        logo: arquivo,
        gestao: gestor,
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
        <h1>Cadastro de Cliente</h1>

        <Content>
          <TextField
            id="standard-basic"
            label="Razão Social"
            onChange={this.handleRazaoSocial}
            required
          />
          <TextField
            id="standard-basic"
            label="Gestor"
            onChange={this.handleGestor}
            required
          />
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              className="inputArquivo"
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleReadArq}
            />
          </label>
        </Content>
        <Button
          variant="contained"
          color="primary"
          className="BtnEnviar"
          onClick={this.handleSend}
        >
          Enviar
        </Button>
      </Container>
    );
  }
}
