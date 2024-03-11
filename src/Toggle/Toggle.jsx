import React, { useState } from 'react'

const Toggle = () => {

  const [toggle, setToggle] = useState();


  return (
    <div>
      {toggle && (
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex laborum esse aut ipsum eius sed repellendus illum ea eum.</h2>
      )}

      <button onClick={() => { setToggle(!toggle) }}>
        {toggle ? "Hide" : "Show"}
      </button>

    </div>
  )
}

export default Toggle
