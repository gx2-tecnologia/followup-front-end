import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';
import MaterialTable from 'material-table';

import { Container, Content, Table } from './styles';

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
    const columns = [
      {
        title: 'Razão Social',
        field: 'razaoSocial',
        editComponent: props => (
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        ),
      },
      { title: 'Gestor', field: 'gestor' },
    ];

    const data = [
      { razaoSocial: this.state.razaoSocial, gestor: this.state.razaoSocial },
    ];
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

        <Table>
          <MaterialTable
            title=""
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = data;
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.data;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.data;
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
            }}
          />
        </Table>
      </Container>
    );
  }
}
