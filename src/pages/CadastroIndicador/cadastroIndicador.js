import React, { Component } from 'react';
import { Container, Content, Table } from './styles';
import api from 'services';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';

export default class CadastroIndicador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
      indicadores: [{ id: null, descricao: '' }],
    };
  }

  componentDidMount() {
    this.handleGetIndicadores();
  }

  handleGetIndicadores = async e => {
    const { indicadores } = this.state;
    const response = api.get('/indicadores/').then(res => {
      this.setState({ indicadores: res.data });
      console.log('Indicadores recebidos:', this.state.indicadores);
    });
  };

  handleDescricao = e => {
    const { descricao } = this.state;
    this.setState({ descricao: e.target.value });
  };

  handleSend = e => {
    const { descricao } = this.state;

    if (descricao.length != 0) {
      this.setState({ descricao: '' });
      this.handleRequest();
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
          this.componentDidMount();
        },
        error => {
          console.log(error);
        }
      );
    console.log('teste', response);
    //alert('Indicador cadastrado com sucesso.');
  }

  handleDeleteIndicador(data) {
    const response = api.delete(`/indicadores/${data.id}`, data).then(
      response => {
        this.componentDidMount();
        //alert('Indicador excluído com sucesso.');
      },
      error => {
        console.log(error);
        alert('Serviço indisponível');
      }
    );
  }

  handleUpdateIndicador(newData) {
    const response = api
      .post('/indicadores', {
        id: newData.id,
        descricao: newData.descricao,
      })
      .then(
        response => {
          this.componentDidMount();
          // alert('Dados Enviados com sucesso.');
        },
        error => {
          alert('Serviço indisponível');
        }
      );
  }

  render() {
    const { indicadores } = this.state;
    const data = indicadores;
    const columns = [
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
    ];

    return (
      <>
        <Container>
          <div className="divForm">
            <h1> Cadastro de Indicador</h1>
            <Content>
              <TextField
                id="standard-basic"
                label="Descrição"
                onChange={this.handleDescricao}
                required
              />
              <Button
                variant="contained"
                color="primary"
                className="BtnEnviar"
                onClick={this.handleSend}
              >
                Enviar
              </Button>
            </Content>
          </div>

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
                        this.handleUpdateIndicador(newData);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.handleDeleteIndicador(oldData);
                      }
                      resolve();
                    }, 1000);
                  }),
              }}
            />
          </Table>
        </Container>
      </>
    );
  }
}
