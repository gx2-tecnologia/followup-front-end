import Home from 'pages/Home';
import cadastroCliente from 'pages/cadastroCliente';

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
];
