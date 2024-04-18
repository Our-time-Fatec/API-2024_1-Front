import React from 'react';
import "./login.css"

function login(): JSX.Element {
  // Função para lidar com o envio do formulário de login
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para autenticação do usuário
  };

  return (
    <div className="container">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default login;