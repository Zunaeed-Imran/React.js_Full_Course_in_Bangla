import React, { memo } from 'react'



const Memo_Message = ({message, handleIncrement }) => {
  console.log('Message-rendering');

  return (
    <>
      <p>Send {message} Massege</p>
      <button onClick={handleIncrement}>Increment Massege</button>
    </>
  );
};

export default memo(Memo_Message);
