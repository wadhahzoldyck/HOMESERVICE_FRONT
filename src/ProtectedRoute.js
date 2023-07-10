import React, { useContext } from 'react';
import { AuthContext } from './components/authentification/context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({Component}) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn === null ? "Please wait..." : isLoggedIn ? Component :<Navigate to="/" />  ;
};

export default ProtectedRoute;
