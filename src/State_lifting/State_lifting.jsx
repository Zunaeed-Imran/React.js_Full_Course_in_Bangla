// we use this file ass app.jsx

import React from 'react';
import Child from './Child';
import Todo1 from './Todo';



const Todo = (props) => {
  return <div>
    hello This is todo without export function.
    <h2>{props.title}</h2>
  </div>
}


console.log("Hello")

function State_lifting() {
  return (
    <div>
      state lifting
      <Child />
      {/*  we don't export default this function because it is in the same page. */}
      <Todo title="This is called by prop" />
      <Todo1 text="Todo from Another Page" />
    </div>
  );
}

export default State_lifting;
