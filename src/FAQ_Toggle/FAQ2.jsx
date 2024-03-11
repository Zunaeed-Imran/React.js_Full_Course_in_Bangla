import React, { useState } from 'react'

const FAQ2 = ({ id, title, desc }) => {
  
  const [toggle, setToggle] = useState();

  return (
    <div>
      <div>
      <h3>{title}</h3>
        <button onClick={() => {setToggle(!toggle)}}>
          {toggle? "-" : "+"}
        </button>
      </div>
      <div>
        {toggle && (
          <p>{desc}</p>
        )}
      </div>
    </div>
  )
}

export default FAQ2;
