import React, { useState } from 'react'
import Message from './Message';


const React_memo = () => {

  const [count, setCount] = useState(0);
  console.log("remdering-memo-page");

  return (
    <>
      <h2>Count:{count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Message message={count} />
    </>
  );
}

export default React_memo;
