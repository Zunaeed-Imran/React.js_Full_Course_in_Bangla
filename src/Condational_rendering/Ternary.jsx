// in this file we practice it by ternary condation.
// but previous we practice it by if else condation.


import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'




// we take class component
export default class Ternary extends Component {


// we take constructor function
  constructor(props) {
    super(props)
  
    this.state = {
      HomePage : false
    }
  }
  

  render() {
// we use distructuring
    const { HomePage } = this.state

//we take 'test2' as a variable
    let test2;

// we use ternary operator / we also can use the ternary operator in the return in jsx file
    test2 = HomePage ? <Home/> : <Login/>


    return (
      <div>
        {test2}
      </div>
    )
  }
}
