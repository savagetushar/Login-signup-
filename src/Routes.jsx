import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Login from './Login';
import Logout from './Logout';

const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Logout setLoggedIn={setLoggedIn} /> : <Form />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;