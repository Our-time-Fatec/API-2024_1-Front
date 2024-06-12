import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useHistory, useLocation } from 'react-router-dom';
import DecodedToken from '../../interfaces/DecodedToken';
import './header.css';


function Header() {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [reloadPage, setReloadPage] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() =>{
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      setUsername(decoded.username);
      setIsAdmin(decoded.status === 'admin');
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogout = ():void => {
    console.log('Itens removidos')
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    history.push('/')
  }

  return (
    <header>
      <a href="/">
      <div className="logo">
        <img src={require('../../assets/logo.png')} alt="Logo da Empresa" />
      </div>
      </a>
      {isLoggedIn ? ( 
      <>         
          <nav>
            <ul>
              <li><a className='nome'>Bem vindo {username}</a></li>
              <li><a href="/about">Sobre nós</a></li>
              <li><a href="/projetos">Projetos</a></li>
              {isAdmin && <li><a href="/register">Registrar</a></li>}
             <li><button onClick={handleLogout}>Sair</button></li>
            </ul>
          </nav>
          </>) : ( 
                <>
                    <nav>
                    <ul>
                      <li><a href="/about">Sobre nós</a></li>
                      <li><a href="/login">Login</a></li>
                    </ul>
                  </nav> 
                </>)}
        </header>
  );
}

export default Header;
