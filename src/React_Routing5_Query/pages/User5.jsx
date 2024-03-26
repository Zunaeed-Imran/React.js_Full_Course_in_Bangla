import React from 'react'
import { useParams } from 'react-router-dom';




const User5 = () => {

  const { userid } = useParams();

  return (
    <>
      <h1>Hello user {userid}</h1>
    </>
  );
}

export default User5;
