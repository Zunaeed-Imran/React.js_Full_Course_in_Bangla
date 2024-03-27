import React from 'react'
import { memo } from 'react';


const Message = () => {


  console.log("Message-rendering");

  return (

    <>
      <p>Send 0 Message</p>
    </>
  )
}

export default memo(Message);
