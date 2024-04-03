import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
