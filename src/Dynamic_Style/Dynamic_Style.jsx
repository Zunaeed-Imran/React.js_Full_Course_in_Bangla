import React from 'react'

const Dynamic_Style = () => {

  const Dynamic_color = (false);

  return (
    <>
      <h2 style={{
        color: Dynamic_color ? "green" : "red",
        backgroundColor: Dynamic_color ? "black" : "yellow"
      }}>
      Hello from Dynamic Style Practice.
      </h2>
    </>
  )
}

export default Dynamic_Style;
