import React from 'react'
import { useUsersContext } from './hooks/useUsersContext';



const User = ({user}) => {

// for custom Hook userContext
  const { users, setUsers } = useUsersContext();
  
  const { id, userName } = user;

  const handleDelet = () => {
    const filterUsers = users.filter(user => user.id !== id);
    setUsers(filterUsers);
  }

  return (
    <>
      <article>
        <h2>{userName}</h2>
        <h4>{id}</h4>
        <button onClick={handleDelet}>
          Delete
        </button>
      </article>
    </>
  )
}

export default User;
