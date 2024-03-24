import React, { useContext } from 'react'
import { Userscontext } from './UsersContext';
import User from './User';




const Users = () => {

  const { users } = useContext(Userscontext);


  return (
    <>
      <section>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </section>    
    </>
  )
}

export default Users;
