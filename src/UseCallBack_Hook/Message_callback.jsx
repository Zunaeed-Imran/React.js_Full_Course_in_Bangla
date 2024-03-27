import React from 'react'
import { memo } from 'react';


const Message_callback = ({ message, handleIncrement }) => {
  console.log('Message rendering');

  return (
    <>
      <p>Send {message} Massege</p>
      <button onClick={handleIncrement}>Increment Message</button>
    </>
  );
};

export default memo(Message_callback);
