import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './login';
import RegisterPage from './register';

const AuthRootComponents = () => {
  const location =useLocation()

  return ( location.pathname === '/login' ? <Login /> : location.pathname==='/register' ? <RegisterPage/> : null);
};

export default AuthRootComponents;