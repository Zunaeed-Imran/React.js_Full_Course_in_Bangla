// in this example we used for condation 'if else' statemant.
// we have to take one return that's why we take a variable 'element'


import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';





class Condational_rendering extends Component {

  // we take constructor function in the class component
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    // we also use distructuring
    const { isLoggedIn } = this.state

    // we take element variable for sue only one return.
    let element;

    // we have to take if else in the render when we use jsx file.
    if (isLoggedIn) {
      element = <Home />;
    } else {
      element = <Login />;
    }

    return (
      <div>
        {element}
      </div>
    )

  }
}

export default Condational_rendering;
