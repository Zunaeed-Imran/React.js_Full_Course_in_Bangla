// another folder for practicing passing data form child to parent component.

import React from 'react'

const Child = (props) => {

   
  const data = "I am from Child Component";

  // props.onChildData(data);

  return (
    <div>
      <p>i am child component</p>
      <p>{props.data}</p>
      <p>{props.onChildData(data)}</p>
    </div>
  );
}


export default Child;