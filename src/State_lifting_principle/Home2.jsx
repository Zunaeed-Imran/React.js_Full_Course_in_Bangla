

import React, { useState } from 'react'
import Todos from './Todo';
import New_todo from './New_todo';



// we send the data in return todos 
const dummyTodos = ["todo1 ", "todo2 ", "Home_Data"];
const Home2 = () => {
  const [todo, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todo, newTodo])
  }

  return (
    <div>
      <New_todo onTodo={handleNewTodo} />
      <p>i am from home</p>
      <Todos todos={todo} />
    </div>
  )
}


export default Home2;