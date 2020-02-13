import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import { Rows, Columns } from '../../components/Teste/populaGridTecnologia';
import { ContainerMain } from './styles';
import If from '../../components/Logic/If';

// import { Container } from './styles';

export default class CadastroHardSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nivel: '',
    };
  }

  onChange = event => {
    const { nivel } = this.state;
    this.setState({ nivel: event.target.value });
    console.log(nivel);
  };

  render() {
    const { nivel } = this.state;
    return (
      <>
        <ContainerMain>
          <h1>Conhecimentos</h1>

          <Table footer={false} rows={Rows} columns={Columns} actions={[{}]} />
        </ContainerMain>
      </>
    );
  }
}
