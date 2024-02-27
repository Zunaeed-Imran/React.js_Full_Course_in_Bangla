// in this folder we will practice Form in React.

// in form if i use `required` without data passing form can't be submitted.

import React, { useState } from 'react';

export default function React_Form() {
  // making useState() and give it to input value.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // making function for onChanged event
  const nameDisplay = (e) => {
    setName(e.target.value);
  };
  const emailDisplay = (e) => {
    setEmail(e.target.value);
  };
  const passwordDisplay = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log('Submitted the form');
// we take variable for info show    
    let userInfo = {
      name: name,
      email: email,
      password: password
    }
    console.log(userInfo);
  };

  return (
    <div>
      <h2>Practicing Form in React</h2>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={nameDisplay}
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailDisplay}
            value={email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordDisplay}
            value={password}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
