import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/routes';
function App() {
  return (
    <h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </h1>
  );
}

export default App;
