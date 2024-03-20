import React, { useRef } from 'react'

const UseRef_Style = () => {


  const userName = useRef();
  const userPass = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    const Name = userName.current.value;
    const Password = userPass.current.value;
    userName.current.style.color = "red"
    console.log(Name, Password);
  }

  return (
    <>
      <h2>Form text color change useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Name' ref={userName}/>
        </div>
        <div>
          <input type="password" placeholder='Password' ref={userPass}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default UseRef_Style;
