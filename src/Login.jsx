import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, just setLoggedIn(true) when the username is not empty
    if (username.trim() !== '') {
      setLoggedIn(true);
      history.push('/');
    }
  };

  return (
    <div className="centered-box">
      <form className="form-box">
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;