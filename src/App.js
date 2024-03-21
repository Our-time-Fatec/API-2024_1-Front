import React from 'react';
import './App.css';
import logo from './assets/logo.jpg'; 

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;