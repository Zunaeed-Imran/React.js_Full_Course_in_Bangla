import React from 'react';






const SignUp = () => {




  return (
    <div>
        <h4>Registration using Formik</h4>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder='Name'
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder='Email'
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder='Password'
            required
          />
        </div>
        <div>
          <button type="button">Registration</button>
        </div>
      </form>
    </div>
  )
}
