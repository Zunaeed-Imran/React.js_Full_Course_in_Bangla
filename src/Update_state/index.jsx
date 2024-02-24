// in this example we make count increment app but, will be increment with previous data also
// we take previous value multiple time in this example



import React, { useState } from 'react'

export default function Update_State() {




  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }


  return (
    <div>
      <h3>We Practice it by Functional Component</h3>
      <h4>We increment Previous all 3 times value</h4>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
    </div>
  )
}
