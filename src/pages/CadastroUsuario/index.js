import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';

import { Container, Content } from './styles';

export default class CadastroUsuario extends React.Component {
  sytate = {
    nome: '',
    senha: '',
  };

  handleSend = e => {
    const { nome, senha } = this.state;

    if (nome && senha) {
      this.handleRequest();
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleRequest() {
    const { nome, senha } = this.state;

    const response = api
      .post('/cadastroUsuarios/', {
        nome: nome,
        senha: senha,
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
        <h1>Cadastro de Usuários</h1>

        <Content>
          <TextField
            id="standard-basic"
            label="Nome"
            onChange={e => {
              this.setState({
                nome: e.target.value,
              });
            }}
            required
          />
          <TextField
            id="standard-basic"
            label="Senha"
            onChange={e => {
              this.setState({
                senha: e.target.value,
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
        {/* {console.log(this.state)} */}
      </Container>
    );
  }
}
