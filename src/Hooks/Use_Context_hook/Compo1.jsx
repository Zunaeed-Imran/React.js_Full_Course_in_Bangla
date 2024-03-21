import React from 'react'
import Compo2 from './Compo2';
import { useState } from 'react';

// the file we create we just import it.
import { UserContext } from './UserContext';



const Compo1 = () => {

  const [user, setUser] = useState({id: 520, name:"Zunaeed Imran"});
  const [text, setText] = useState("This is Description Text");

  return (
    <UserContext.Provider value={{ user, text }}>
      
      <Compo2 />

    </UserContext.Provider>
  )
}

export default Compo1;
