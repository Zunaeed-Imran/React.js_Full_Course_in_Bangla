import React from 'react';
import Todo2 from './Todo2';

const Todos = (props) => {
  return (
    <div>
      i am from todo component
      <br />
      {/*  take the data from home page  */}
      {/* {props.todos} <br /> */}

      {/* using map function  */}
      {props.todos.map((todo, index) => (
        <Todo2 key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
