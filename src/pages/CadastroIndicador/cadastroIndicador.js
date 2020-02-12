import React, { Component } from 'react';
import { ContainerMain } from './styles';

export default class CadastroIndicador extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ContainerMain>
          <h1> Cadastro de Indicador</h1>
          <div className="divForm">
            <form>
              <input type="text" placeholder="Descrição" />
              <button>Salvar</button>
            </form>
          </div>
        </ContainerMain>
      </>
    );
  }
}
