// in this file we will learn how to stop calling parent component if we call chaild.
// we learn how to stopPropagation.


import React from 'react'


// we don't use 'rfc' function here.
const Event_bubbling = () => {

  const handleParentClick = (event) => {
    document.write('parent event :', event);
  };
  const handleChildClick = (event) => {
    //now we use stopPropagation for not call all parent
    event.stopPropagation();
    document.write('child event :', event);
  }
  return <div onClick={handleParentClick}>

    <h1>We learn stopPropagation</h1>
    <button onClick={handleChildClick}>Click to call event</button>
  </div>
}


export default Event_bubbling;