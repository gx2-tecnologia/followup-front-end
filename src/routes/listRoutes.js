import Home from 'pages/Home';
import CadastroIndicador from 'pages/CadastroIndicador/cadastroIndicador';

export const routes = [
  {
    description: 'Home',
    path: '/Home',
    component: Home,
    isMenu: false,
  },
  {
    description: 'Cadastro de Indicadores',
    path: '/CadastroIndicador',
    component: CadastroIndicador,
    isMenu: false,
  },
];
