import React, { useState } from 'react'
import New_Users from './New_Users';
import Users from './Users';

const Custom_Context_App = () => {


  const [users, setUsers] = useState([
    { id: 520, userName: 'Md Zunaeed Imran' },
    { id: 508, userName: 'Rakibul Islam' },
    { id: 519, userName: 'Likon' }
  ]);



  return (
    <Userscontext.Provider value={{ users, setUsers }}>
      <div>
        <New_Users />
        <Users />
      </div>
    </Userscontext.Provider>
  );
};

export default Custom_Context_App;
