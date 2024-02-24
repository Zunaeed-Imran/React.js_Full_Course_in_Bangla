// From this Practice File we learn basic onChange Event handler.
// we use class component in this practice event handler file

import React, { Component } from 'react';



// we take class for this event handler
class Event_handle_class extends Component {


// we take constructor function 
  constructor(props) {
    super(props)
  
    this.state = {
       ChangeText : ''
    }
  }


// we use ES6 function  for state
  ChangeText = (t) => {
    this.setState({
      ChangeText: t.target.value
      
    })
  }

  render() {
    
    return (
      <div>
        <h2>Practice OnChange Event handler</h2>

        <input
          type="text"
          placeholder="Type anything"
          onChange={this.ChangeText}
        />

        <p>{this.state.ChangeText}</p>
      </div>
    );
  }
}

export default Event_handle_class;
