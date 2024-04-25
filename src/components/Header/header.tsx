import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import DecodedToken from '../../interfaces/DecodedToken';
import Figure from 'react-bootstrap/Figure'
import './header.css';

interface Header{
  isLogin?: boolean;
}

const Header: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() =>{
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    console.log('Token:', token);
    console.log('Username:', username);

    if (token && username){
      try{
        const decodedToken = jwtDecode<DecodedToken>(token);
        setUserId(decodedToken.userId);
        setUsername(JSON.parse(username));
      }catch (error){
        console.error('Erro ao decodificar o Token JWT')
      }
    }

  }, []);

  const handleLogout = ():void => {
    console.log('Itens removidos')
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    history.push('/')
  }

  return (
    <header>
          <div className="logo">
            <img src={require('../../assets/logo.png')} alt="Logo da Empresa" />
          </div>
          <nav>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/about">Sobre nós</a></li>
              {isAuthenticated ? ( <li><a onClick={handleLogout}>Sair</a></li>) : ( <li><a href="/login">Login</a></li> )} 
            </ul>
          </nav>
        </header>
  );
}

export default Header;
