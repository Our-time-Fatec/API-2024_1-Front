import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'
import api from "../../services/api.ts"

const Login:React.FC= () => {
  const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [isButtonDisabled,setIsButtonDisabled] = useState(false);
  const history = useHistory();

  const handleLogin = async () =>{
    setIsButtonDisabled(true);
    await api.post('/user/login', {username, password})
    .then((response) =>{
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', JSON.stringify(username));
      alert(response.data.message);
      history.push('/projetos');
    })
    .catch((error) => {
      alert(error)
    })
    .finally(() => {
      setIsButtonDisabled(false);
    })
    }

  return (
    <div className="container">
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
        </div>
        <button onClick={handleLogin} disabled={isButtonDisabled} type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;