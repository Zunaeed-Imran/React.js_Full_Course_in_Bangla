import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useUsersContext } from './hooks/useUsersContext';

const New_Users = () => {
  // custom hook userContext.
  const { setUsers } = useUsersContext();

  const [userName, setUserName] = useState('');

  const handleChange = event => {
    setUserName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { id: uuidv4().toString(), userName: userName };
    setUsers(prevUser => [...prevUser, newUser]);
    setUserName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userName}
          onChange={handleChange}
        />

        <button>Add</button>
      </form>
    </>
  );
};

export default New_Users;
