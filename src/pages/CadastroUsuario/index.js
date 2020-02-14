import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import MaterialTable from 'material-table';


import { Container, Content } from './styles';

export default class CadastroUsuario extends React.Component {
  state = {
    nome: '',
    senha: '',
    email: '',
    user: [{ id: null, nome: '', senha: '', email: '' }],
  };


  componentDidMount() {
    const response = api.get(`/users`).then(res => {
      const users = res.data;
      this.setState({
        user: users,
      });
    });
  }

  handleSend = e => {
    const { nome, senha, email } = this.state;

    if (nome && senha && email) {
      this.handleSet();

    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleSet() {
    const { nome, senha, email} = this.state;

    const response = api
      .post('/users', {
        name: nome,
        password: senha,
        email: email,
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

  handleRequest() {
    const { nome, senha, email } = this.state;

    const response = api
      .post('/users/', {
        nome: nome,
        senha: senha,
        email: email,
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

  handleUpdate(data){
    const response = api.post(`/users/`, data).then(
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

  handleDelete(data) {
    const response = api.delete(`/users/${data.id}`, data).then(
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

  render() {
    const columns = [
      { title: 'id', field: 'id' },
      {
        title: 'Nome',
        field: 'name',
        editComponent: props => (
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        ),
      },
      { title: 'Senha', field: 'password' },
      { title: 'Email', field: 'email' },
    ];

    const data = this.state.user;

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
            <TextField
            id="standard-basic"
            label="E-mail"
            onChange={e => {
              this.setState({
                email: e.target.value,
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

        <div>
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
                      this.handleDelete(oldData)
                    }
                    resolve();
                  }, 1000);
                }),
            }}
          />
        </div>
      </Container>
    );
  }
}
