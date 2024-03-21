import React from 'react'
import Compo2 from './Compo2';
import { useState } from 'react';




const Compo1 = () => {

  const [user, setUser] = useState({id: 520, name:"Zunaeed Imran"});

  return (
    <>
      Hello From Practice 2nd time.
      <Compo2 user={user} />
    </>
  )
}

export default Compo1;
