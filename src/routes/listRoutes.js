import Home from 'pages/Home';
import cadastroCliente from 'pages/cadastroCliente';
import CadastroIndicador from 'pages/CadastroIndicador/cadastroIndicador';
import CadastroCompetencia from 'pages/CadastroCompetencia';

export const routes = [
  {
    description: 'Home',
    path: '/Home',
    component: Home,
    isMenu: false,
  },
  {
    description: 'Cadastro de Cliente',
    path: '/cadastrocliente',
    component: cadastroCliente,
    isMenu: false,
  },
  {
    description: 'Cadastro de Indicadores',
    path: '/cadastroindicador',
    component: CadastroIndicador,
    isMenu: false,
  },
  {
    description: 'Cadastro de Competência',
    path: '/cadastrocompetencia',
    component: CadastroCompetencia,
    isMenu: false,
  },
];
