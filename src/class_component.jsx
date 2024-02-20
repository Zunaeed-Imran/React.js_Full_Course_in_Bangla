// in this file we practice class component.

import React, { Component } from 'react'

class Class_practice extends Component {
  
  render() {

    const card = "Hello calss component testing";
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Class_practice;