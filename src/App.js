import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/routes';
import MasterPage from './components/MasterPage';
import './app.css';
function App() {
  return (
    <h1>
      <BrowserRouter>
        <MasterPage>
          <Routes />
        </MasterPage>
      </BrowserRouter>
    </h1>
  );
}

export default App;
