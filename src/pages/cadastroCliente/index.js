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
    razaoSocial: '',
    logo: '',
    gestao: '',
  };

  componentDidMount() {
    const response = api.get(`/clientes`).then(res => {
      const users = res.data;
      this.setState({
        user: users,
      });
    });
  }

  // componentDidUpdate() {
  //   const response = api.get(`/clientes`).then(res => {
  //     const users = res.data;
  //     this.setState({
  //       user: users,
  //     });
  //   });
  // }

  handleSend = e => {
    const { razaoSocial, gestao, logo } = this.state;
    console.log('state', this.state.change);
    console.log('teste2', razaoSocial);
    console.log('teste2', gestao);
    console.log('teste2', logo);

    if (razaoSocial && gestao && logo) {
      this.handleSet();
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleSet() {
    const { razaoSocial, gestao, logo } = this.state;

    const response = api
      .post('/clientes', {
        razaoSocial: razaoSocial,
        gestao: gestao,
        logo: logo,
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

  handleDelete(data) {
    const response = api.delete(`/clientes/${data.id}`, data).then(
      response => {
        console.log(response);
        alert('Dados Enviados com sucesso.');
      },
      error => {
        console.log(error);
        alert('Serviço indisponível');
      }
    );

    const respons = api.get(`/clientes`).then(res => {
      const users = res.data;
      this.setState({
        user: users,
      });
    });
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
  }

  handleChangeGestor = e => {
    this.setState({ gestao: e.target.value });
  };

  handleChangeRazaoSocial = e => {
    this.setState({ razaoSocial: e.target.value });
  };

  handleChangeLogo = e => {
    this.setState({ logo: e.target.value });
  };

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
            onChange={this.handleChangeRazaoSocial}
            // required
          />
          <TextField
            id="standard-basic"
            label="Gestor"
            onChange={this.handleChangeGestor}
            // required
          />
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              className="inputArquivo"
              id="contained-button-file"
              type="file"
              onChange={this.handleChangeLogo}
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
                      // let data = this.data;
                      console.log('data dele', oldData);
                      this.handleDelete(oldData);
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
