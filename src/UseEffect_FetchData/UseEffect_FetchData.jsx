import React, { useEffect, useState } from 'react'

const UseEffect_FetchData = () => {

  const [todo, setTodo] = useState(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTodo(data);
      });
  }, []);


  return (
    <div>
      <h2>Title</h2>
    {todo && todo.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default UseEffect_FetchData;
