// we practice usestate with object in the form.



import React, { useState } from 'react';

export default function UseStateObject() {

  // making useState() and give it to input value.
  const [user, setUser] = useState({name: '', email: '', password: ''})

  // distructuring the variable
  const{name, email, password} = user


  // making function for onChanged event
  const handleChange = (e) => {
    const filedName = e.target.name;
    if (filedName === 'name') {
      setUser({name: e.target.value, email, password})
    } else if (filedName === 'email') {
      setUser({name, email: e.target.value, password})
    } else if (filedName === 'password') {
      setUser({name, email, password: e.target.value})
    }
  } 


  const handleSubmit = (e) => {
    console.log('Submitted the form');

    
    console.log(user);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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






