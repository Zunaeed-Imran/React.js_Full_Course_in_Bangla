import React, { useContext } from 'react'
import { Userscontext } from '../UsersContext'




export const useUsersContext = () => {
  return useContext(Userscontext);
};

