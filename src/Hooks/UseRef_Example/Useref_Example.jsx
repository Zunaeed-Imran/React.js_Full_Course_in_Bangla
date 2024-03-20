import React, { useRef } from 'react'

const Useref_Example = () => {


  const userName = useRef();
  const userPass = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value);
    console.log(userPass.current.value);
  }

  return (
    <>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="name" name="" ref={userName} placeholder='Name'/>
        </div>
        <div>
        <input type="password" name="" ref={userPass} placeholder='Password'/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Useref_Example;
