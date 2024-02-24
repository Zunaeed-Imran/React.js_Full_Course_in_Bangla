// we will see the different between 'class component and functional component'

// in this practice project we will use class component.

// we will make count using class component


import React, { Component } from 'react';

export default class Hook_increment1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
    };
  }

  Increment = () => {
    this.setState({
      count1: this.state.count1 + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count1}</h1>
        <button onClick={this.Increment}>Increment</button>
      </div>
    );
  }
}
