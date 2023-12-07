import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Logout = ({ setLoggedIn }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Add your logout logic here
    setLoggedIn(false);
    history.push('/login');
  };

  return (
    <div className="centered-box">
      <div className="form-box">
        <h2>Welcome! You are logged in.</h2>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;