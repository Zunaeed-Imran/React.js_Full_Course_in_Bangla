import React from 'react'
import { Navigate } from 'react-router-dom';



const Protected = ({login, children}) => {

  if (!login) {
    return <Navigate to='/' replace />;
  }

  return children;
}

export default Protected;
