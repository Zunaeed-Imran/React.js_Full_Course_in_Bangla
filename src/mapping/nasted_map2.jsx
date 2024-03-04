import React from 'react'

const users = [
  {
    firstName: "MD_Zunaeed",
    lastName: "Imran"
  },
  {
    age: 27,
    phone: [{home:"01958665214"}, {office:"895444"}]
  }
]


const Nasted_map2 = () => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
          <h1>{user.age}</h1>
          {
            user.phone && user.phone.map((mobile, index) => 
              <div key={index}>
                <h1>{mobile.home}</h1>
                <h1>{mobile.office}</h1>
              </div>
            )
          }
        </div>
      ))}
    </div>
  )
}

export default Nasted_map2;
