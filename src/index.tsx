//importa a biclioteca react
import React from 'react';
// importra a biblioteca react-dom
import ReactDOM from 'react-dom';
//importa o prim eiro componente React chamasdo app
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//oq o componente App retornará será exibido no elemnto HTML cujo id é root

