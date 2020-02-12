import React, { Component } from 'react';
import { ContainerMain } from './styles';
import api from 'services';

export default class CadastroIndicador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
    };
  }

  handleDescricao = e => {
    const { descricao } = this.state;
    this.setState({ descricao: e.target.value });
    console.log(descricao);
  };

  handleSend = e => {
    const { descricao } = this.state;

    if (descricao.length != 0) {
      this.handleRequest();
      console.log('Entrei');
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleRequest() {
    const { descricao } = this.state;

    const response = api
      .post('/indicadores/', {
        descricao: descricao,
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    console.log('teste', response);
    alert('Indicador cadastrado com sucesso.');
  }

  render() {
    return (
      <>
        <ContainerMain>
          <h1> Cadastro de Indicador</h1>
          <div className="divForm">
            <form>
              <input
                type="text"
                placeholder="Descrição *"
                onChange={this.handleDescricao}
                //required
              />
              <button onClick={this.handleSend}>Enviar</button>
            </form>
          </div>
        </ContainerMain>
      </>
    );
  }
}
