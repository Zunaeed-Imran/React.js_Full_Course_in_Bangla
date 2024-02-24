// we practice normal function to make increase number (not ES6)

// we need to binding event for not showing error
// without binding ES6 can run the app but show error in the console
// like we practice increasing number




import React, { Component } from 'react'


export default class Binding_event extends Component {


constructor(props) {
  super(props)

  this.state = {
    count: 0
  }
  // we bind the event here.
  this.Increment = this.Increment.bind(this);
}

  
  Increment () {
    this.setState({
      count: this.state.count+1
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>increase</button>
      </div>
    )
  }
}

