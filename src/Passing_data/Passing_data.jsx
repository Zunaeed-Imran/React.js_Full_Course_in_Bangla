// this file i use as app file.

// in this file we practice passing data from child to parent component.


import React from 'react'

// import data to showing to the display.
import Child from './Child'


export default function Passing_data() {
  const Pdata = "i am from parent component";


  const handleChildData = (childData) => {
    console.log(childData);
  }

  return (

    <Child Pdata={Pdata} onCHildData={handleChildData} />
    
  )
}
