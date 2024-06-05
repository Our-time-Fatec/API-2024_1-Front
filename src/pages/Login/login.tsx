import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'
import api from "../../services/api.ts"

const Login:React.FC= () => {
  const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [isButtonDisabled,setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) =>{
    e.preventDefault();
    setIsButtonDisabled(true);
    setErrorMessage('');
    setIsUsernameError(false);
    setIsPasswordError(false);
    try {
      const response = await api.post('/user/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', JSON.stringify(username));
      setTimeout(() => {
        history.push('/projetos');
      }, 500);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMsg = error.response.data.message;
        if (errorMsg === 'Usuario não encontrado.') {
          setErrorMessage('Nome de usuário incorreto.');
          setIsUsernameError(true);
        } else if (errorMsg === 'Senha incorreta.') {
          setErrorMessage('Senha incorreta.');
          setIsPasswordError(true);
        } else {
          setErrorMessage('Falha no login.');
        }
      } else {
        setErrorMessage('Ocorreu um erro desconhecido.');
      }
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="container">
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className={`form-group ${isUsernameError ? 'error' : ''}`}>
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required />
        </div>
        <div className={`form-group ${isPasswordError ? 'error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
          {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
        <button onClick={handleLogin} disabled={isButtonDisabled} type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;