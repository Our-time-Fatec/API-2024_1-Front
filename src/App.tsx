import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home.tsx';
import Login from './pages/Login/login.tsx';
import Header from './components/Header/header.tsx'
import './App.css'; // Importe o arquivo CSS uma vez aqui

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
