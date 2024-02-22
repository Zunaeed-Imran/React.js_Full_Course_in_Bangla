


import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';





class Condational_rendering extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Home />;
    } else {
      return <Login />;
    }
  }
}

export default Condational_rendering;
