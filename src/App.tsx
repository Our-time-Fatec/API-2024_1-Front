import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home.tsx';
import Login from './pages/Login/login.tsx';
import Header from './components/Header/header.tsx'
import About from './pages/About/about.tsx';
import Projetos from './pages/Projetos/projetos.tsx';
import Taubate from './pages/Taubate/taubate.tsx';
import Cruzeiro from './pages/Cruzeiro/cruzeiro.tsx';
import Atibaia from './pages/Atibaia/atibaia.tsx';
import Register from './pages/Registro/register.tsx';
// import Footer from './components/Footer/footer.tsx';
import './App.css'; // Importe o arquivo CSS uma vez aqui

function App(): JSX.Element {
  return (
    <Router>
    <div id="page-container">
      <Header/>
      <div> 
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} /> 
          <Route path="/projetos" component={Projetos} />
          <Route path="/atibaia" component={Atibaia} />
          <Route path="/cruzeiro" component={Cruzeiro} />
          <Route path="/taubate" component={Taubate} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
