import React, { useState } from 'react'
import Component2 from './Component2';



const Component1 = () => {

  const [user, setUser] = useState({ id: 520, name:"Zunaeed Imran"});

  return (
    <>
      <Component2 user={user} />
    </>
  )
}

export default Component1;
