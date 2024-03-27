// we practice memo in this file.

import React from 'react'
import { memo } from 'react';


const Message = ({message}) => {


  console.log("Message-rendering");

  return (

    <>
      <p>Send {message} Message</p>
    </>
  )
}

export default memo(Message);
