
import React, { useState } from 'react'




const New_todo = (props) => {
  const [todo, setTodo] = useState("");


  const handleInputChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo)
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="todo">New Todo: </label>
      
      <input type="text" name="todo" id="todo" value={todo} onChange={handleInputChange}/>
      
      <button>Add Todo</button> <br /> <br />
    </form>
  )
}

export default New_todo;