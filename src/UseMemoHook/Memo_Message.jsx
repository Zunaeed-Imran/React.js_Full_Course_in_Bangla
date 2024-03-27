import React, { memo, useMemo } from 'react';

const Memo_Message = ({ message, handleIncrement }) => {
  console.log('Message-rendering');

  // let number = 0;
  // for (let index = 0; index < 5000; index++) {
  //   number++;
  // }

  const calculate = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 50000000; index++) {
      number++;
    }
    return number;
  }, []);

  return (
    <>
      <h2>Number: {calculate}</h2>
      <p>Send {message} Massege</p>
      <button onClick={handleIncrement}>Increment Massege</button>
    </>
  );
};

export default memo(Memo_Message);
