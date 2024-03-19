import React, { useState } from 'react'
import Users from './Users'



const Prob_Type = () => {

  const [userName, setUserName] = useState("Imran");
  const [userId, setUserId] = useState(520);



  return (
    <div>
      <Users userName={userName} userId={userId} />
    </div>
  )
}

export default Prob_Type;
