


import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';


constructor(props) {
  super(props)

  this.state = {
    isLoggedIn: true
  }
}



class Condational_rendering extends Component {
  render() {
    
    
    if (this.state.isLoggedIn) {
      return <Home/>
    } else {
      return <Login/>
    }
    
 

  }
}

export default Condational_rendering;
