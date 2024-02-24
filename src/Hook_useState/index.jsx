
// we will see the different between 'functional component and class component'.

// in this practice project we will use 'functional component'

// we can control state in functional component by using 'useState Hook'

// in this example project we will make count increment app.

// we have to import `useState` when we use functional component and useStae.

import React, { useState } from 'react'

export default function Hook_useState() {


  const [count2, setCount2] = useState(0)


  const Increment2 = () => {
    setCount2(count2 + 1);
}

  return (

    <div>
      <h3>We Use Functional Component in this example</h3>
      <h1>{count2}</h1>
      <button onClick={Increment2}>Increment</button>
    </div>
  )
}
