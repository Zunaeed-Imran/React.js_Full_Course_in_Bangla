import React, { useState } from 'react'
import { useEffect } from 'react';


// This variable for displaying loading massege.
const loadingMassege = <p>Data is Loading From Json API............</p>


const UseEffect_Error_handle = () => {


  const [todo, setTodo] = useState(null);

  // we take this const for see the loading massege.
  const [isloading, setIsloading] = useState(true);

  // we take this const for error handeling.
  const [error, setError] = useState(null);




  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todo')
        .then(resource => {
          if (!resource.ok) {
            throw Error("Fetching is not Sucessful")
          } else {
            return resource.json();
          }
        })
        .then(data => {
          setTodo(data);
          setIsloading(false);
          setError(null);
        })
        .catch ((error) => {
          setError(error.message);
          setIsloading(false);
        });
    }, 2000)
  }, []);


  // we take this variable to make this page more clean.
  const todoElement =
    todo && todo.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>
    });
  

  return (
    <div>
      <h1>Todo and Error Handeling.</h1>
      {error && <p>{error}</p>}
      {isloading && loadingMassege}
      {todoElement}
    </div>
  )
}

export default UseEffect_Error_handle;
