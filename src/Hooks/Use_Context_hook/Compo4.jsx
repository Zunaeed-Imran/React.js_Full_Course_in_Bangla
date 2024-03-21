import React, { useContext } from 'react'
import { UserContext } from './UserContext';


const Compo4 = () => {
 
  const {user, text }= useContext(UserContext);

  return (
    <>
      <h3>Component Four</h3>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{text}</p>
    </>
  );
}

export default Compo4;
