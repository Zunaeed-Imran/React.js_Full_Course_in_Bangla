import React, { useContext } from 'react'
import { Userscontext } from './UsersContext';



const User = ({user}) => {

  const { users, setUsers } = useContext(Userscontext);
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
