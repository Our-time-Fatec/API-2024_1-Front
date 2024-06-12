import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css'
import api from "../../services/api.ts"

const Register:React.FC= () => {
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [name,setName] = useState<string>('');
    const [mail,setMail] = useState<string>('');
    const [status, setStatus] = useState<string>('user');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const history = useHistory();
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setSuccess(false);
  
      try {
        await api.post('/user/register', { name, mail, username, password });
        setSuccess(true);
        setTimeout(() => {
          history.push('/projetos');
        }, 2000);
      } catch (error) {
        setError('Erro ao registrar. Por favor, tente novamente.');
      }
    };
  
    return (
      <div className="container">
        <div className="register-container">
          <h2>Registrar</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email</label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                id="mail"
                name="mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="status">Role</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              id="status"
              name="status"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">Registrado com sucesso! Redirecionando...</span>}
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    );
  };
export default Register;