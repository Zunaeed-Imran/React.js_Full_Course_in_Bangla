// in this we also make just like previous one but we take it(value) just one time


import React, { useState } from 'react'

export default function Update_State2() {


  const [count2, setCount2] = useState(0);

  const Increment2 = () => {
    setCount2(count2 => + count2 + 1)
  }

  return (
    <div>
      <h2>2nd example of Increment using function</h2>
      <h1>{count2}</h1>
      <button onClick={Increment2}>increment</button>
    </div>
  )
}
