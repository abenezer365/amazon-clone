
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../components/Context';

function Protected({ children, message }) {
  const [{ user }] = useContext(Context);
  const location = useLocation()

  if (!user) {
    return <Navigate to="/auth" state={{ from: location, info: message }} replace />;
  }

  return children;
}

export default Protected;
