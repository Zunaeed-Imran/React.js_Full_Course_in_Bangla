// another folder for practicing passing data form child to parent component.

import React from 'react'

const Child = (props) => {

   
  const ChildData = "I am from Child Component";

  props.onChildData(data);

  return (
    <div>
      <p>i am child component</p>
      <p>{props.Pdata}</p>
      <p>{props.onChildData(ChildData)}</p>
    </div>
  );
}


export default Child;