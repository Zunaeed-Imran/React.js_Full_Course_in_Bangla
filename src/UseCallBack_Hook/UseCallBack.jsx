import React, { useCallback, useState } from 'react'
import Message_callback from './Message_callback';

const UseCallBack = () => {


  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("App_rendering")


  const handleIncrement = useCallback(() => {
    setCount(count + 2);
  }, [count]);


  return (
    <>
      {toggle ? "on" : "off"}
      
      <button onClick={() => {
        setToggle(!toggle);
      }}>Toggle</button>

      
      <h2>Practice Use Call back Hook.</h2>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <Message_callback message={count} handleIncrement={handleIncrement} />
    </>
  );
}

export default UseCallBack;
