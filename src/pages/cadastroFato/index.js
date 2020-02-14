import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from 'services';
import { FaFileUpload } from 'react-icons/fa';
import MaterialTable from 'material-table';

import { Container, Content, Table } from './styles';

export default class cadastroFato extends React.Component {
  state = {
    descricao: '',
    data: '',
    userId: null,
    rows: [],
  };

  componentDidMount() {
    this.handleGet();
  }

  handleDescricao = e => {
    this.setState({ descricao: e.target.value });
  };
  handleData = e => {
    this.setState({ data: e.target.value });
  };
  handleUserId = e => {
    this.setState({ userId: e.target.value });
  };

  handleSend = e => {
    const { descricao, data, userId } = this.state;
    if (descricao && data && userId) {
      this.handlePost(descricao, data, userId);
    } else {
      alert('Todos os campos devem estar preenchidos.');
    }
  };

  handleInsert(descricao, data, userId) {
    const response = api
      .post('/fatos/', {
        descricao: descricao,
        data: data,
        userId: userId,
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

  handleUpdate(update) {
    console.log(update);
    const response = api.post('/fatos/' + update.id, { update }).then(
      response => {
        console.log(response);
        alert('Dados Alterados com sucesso.');
      },
      error => {
        console.log(error);
        alert('Serviço indisponível');
      }
    );
  }

  handleDelete(id) {
    console.log(id);
    const response = api.delete('/fatos/' + id).then(
      response => {
        console.log(response);
        alert('Dados Deletados com sucesso.');
      },
      error => {
        console.log(error);
        alert('Serviço indisponível');
      }
    );
  }

  handleGet() {
    const response = api.get('').then(
      response => {
        this.setState({ rows: response });
        console.log(response);
      },
      error => {
        console.log(error);
        alert('Serviço indisponível.');
      }
    );
  }

  render() {
    const columns = [
      { title: 'Id', field: 'id' },
      {
        title: 'Descrição',
        field: 'descricao',
        editComponent: props => (
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        ),
      },
      { title: 'Data', field: 'data' },
      { title: 'Id Do Usuario', field: 'userId' },
    ];

    const rows = [];

    return (
      <Container>
        <h1>Cadastro de Fatos Relevantes</h1>

        <Content>
          <TextField
            id="standard-basic"
            label="Descrição"
            onChange={this.handleDescricao}
            multiline
            required
          />
          <TextField
            id="standard-basic"
            label="Data"
            onChange={this.handleData}
            required
          />
          <TextField
            id="standard-basic"
            label="Usuario"
            onChange={this.handleUserId}
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

        <Table>
          <MaterialTable
            title=""
            columns={columns}
            data={rows}
            editable={{
              onRowAdd: newRow =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      console.log('onRowAdd');
                      const rows = rows;
                      rows.push(newRow);
                      this.setState({ rows }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newRow, oldRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      this.handleUpdate(newRow);
                    }
                    resolve();
                  }, 1000);
                }),
              onRowDelete: oldRow =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      this.handleDelete(oldRow.id);
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
