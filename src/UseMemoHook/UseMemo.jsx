import React, { useCallback, useState } from 'react'
import Memo_Message from './Memo_Message';



const UseMemo = () => {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("App_Page");

  const handleIncrement = useCallback(() => {
    setCount(count + 2);

  }, [count]);

  return (
    <>
      {toggle ? 'on' : 'off'}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      <h2>Count: {count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <Memo_Message message={count} handleIncrement={handleIncrement} />
    </>
  );
}

export default UseMemo;
