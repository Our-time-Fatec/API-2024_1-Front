import React from 'react';
import Figure from 'react-bootstrap/Figure'
import './header.css';

function Header() {

  
  return (
    <header>
          <div className="logo">
            <img src={require('../../assets/logo.png')} alt="Logo da Empresa" />
           
          </div>
          <nav>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/about">Sobre nós</a></li> {/* Altere para "/login" */}
              <li><a href="/login">Login</a></li> {/* Altere para "/login" */}
            </ul>
          </nav>
        </header>
  );
}

export default Header;
