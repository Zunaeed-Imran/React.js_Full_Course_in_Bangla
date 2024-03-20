import React from 'react'


// we also Dertructuring the props.
const Component4 = ({user}) => {
  return (
    <div>
      <h2>Component 4</h2>
      <p>{user.name}</p>
      <p>{user.id}</p>
    </div>
  )
}

export default Component4;
