import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';
import MaterialTable from 'material-table';

import { Container, Content, Table } from './styles';

export default class cadastroCliente extends React.Component {
  state = {
    user: [{ id: null, razaoSocial: '', logo: '', gestao: '' }],
    change: [{ razaoSocial: '', logo: '', gestao: '' }],
  };

  handleGet() {
    const { razaoSocial, gestao, arquivo } = this.state.change;

    const response = api
      .post('/clientes', {
        razaoSocial: razaoSocial,
        gestao: gestao,
        arquivo: arquivo,
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

  handleSend = e => {
    const { razaoSocial, gestor, arquivo } = this.state;

    if (razaoSocial && gestor && arquivo) {
      this.handleRequest();
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  componentDidMount() {
    const { razaoSocial, gestao, arquivo } = this.state;

    const response = api.get(`/clientes`).then(res => {
      const users = res.data;
      this.setState({
        user: users,
      });
    });

    console.log('estado', this.state);
  }

  handleUpdate(data) {
    const { razaoSocial, gestao, arquivo } = this.state.user;

    const response = api.post(`/clientes/${data.id}`, data).then(
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

  handleRequest() {
    const { razaoSocial, gestao, arquivo } = this.state.user;

    const response = api
      .post('/clientes/', {
        razaoSocial: razaoSocial,
        logo: arquivo,
        gestao: gestao,
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
      { title: 'id', field: 'id' },

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
      { title: 'Gestor', field: 'gestao' },
      { title: 'Logo', field: 'logo' },
    ];

    const data = this.state.user;

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
                      this.handleUpdate(newData);
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
