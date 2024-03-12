import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {


  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(false);


  useEffect(() => {
    console.log("UseEffect");
  },[count]);

  return (
    <div>
      <div>
        {console.log("Rendering")}
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount(count => count+1)}}>
          +
        </button>
        <button onClick={()=> {setCount2(!count2)}}>
          isloading
        </button>
     </div>
    </div>
  )
}

export default UseEffectExample;
