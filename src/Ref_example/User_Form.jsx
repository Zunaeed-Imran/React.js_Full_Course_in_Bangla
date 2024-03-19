import React, { Component, createRef } from 'react'

export default class User_Form extends Component {


  constructor(props) {
    super(props)
    this.userImran = createRef();
    this.state = {
       
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userImran.current.value);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              name=""
              id=""
              placeholder='Name'
              ref={this.userImran}
            />
          </div>
          <div>
            <input type="password"
              name=""
              id=""
              placeholder='Password' />
          </div>
          <button>Register</button>
        </form>
      </>
    )
  }
}
