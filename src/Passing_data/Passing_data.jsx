// this file i use as app file.

// in this file we practice passing data from child to parent component.


import React from 'react'

// import data to showing to the display.
import Child from './Child'


export default function Passing_data() {
  const data = "i am from parent component";


  const handleChildData = (childData) => {
    console.log(childData);
  }

  return (

    <Child data={data} onCHildData={handleChildData} />
    
  )
}
