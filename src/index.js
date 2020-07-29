import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />  
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={()=>(<h1>Erro 404</h1>)} />
      {/* <Route component={Home} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
