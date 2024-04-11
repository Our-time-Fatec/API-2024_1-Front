import React from 'react';
import './header.css';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
          <div className="logo">
            <img src={logo} alt="Logo da Empresa" />
          </div>
          <nav>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/login">Login</a></li> {/* Altere para "/login" */}
            </ul>
          </nav>
        </header>
  );
}

export default Header;
