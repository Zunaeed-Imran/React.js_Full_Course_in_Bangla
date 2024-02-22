// in this file we practice state by using class.
// for using state we have to use constructor `rconst` enter will make a constructor.


// first we take a class
// than we take constructor function
// than we use onclick event in button
// than we make function for onclick button.(we use setState function in button function.)
// we also use disable (built-in-function) button ternary operator.

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }


  increment = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count-1
    })
  }
  
  
  render() {
    //we also use destructuring
    const {count} = this.state
    return (
      <div>
        <Card>

        <h1>Count : {count}</h1>
        <span>

          <Button onClick={this.increment} disabled={count === 10 ? true : false}> + </Button>
          <Button onClick={this.decrement} disabled={count === 0 ? true : false}> - </Button>
        </span>
        </Card>
      </div>
    );
  }
}
