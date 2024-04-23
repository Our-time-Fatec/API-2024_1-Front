import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home.tsx';
import Login from './pages/Login/login.tsx';
import Header from './components/Header/header.tsx'
import About from './pages/About/about.tsx';
import Projetos from './pages/Projetos/projetos.tsx';
// import Footer from './components/Footer/footer.tsx';
import './App.css'; // Importe o arquivo CSS uma vez aqui

function App(): JSX.Element {
  return (
    <Router>
    <div id="page-container">
      <Header/>
      <div> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} /> Nav
          <Route path="/projetos" component={Projetos} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
