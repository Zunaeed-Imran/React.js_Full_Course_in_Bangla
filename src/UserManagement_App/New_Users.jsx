import React, { useContext, useState } from 'react'
import { Userscontext } from './UsersContext';
import { v4 as uuidv4 } from 'uuid';


const New_Users = () => {

  const { setUsers } = useContext(Userscontext);

  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
    setUserName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: uuidv4().toString(), userName: userName };
    setUsers(prevUser => [...prevUser, newUser]);
    setUserName('');
}


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={userName}
          onChange={handleChange} />
        
        <button>Add</button>
        </form>
    </>
  )
}

export default New_Users;
