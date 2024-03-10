import React from 'react';
import { Formik, useFormik } from 'formik';





const SignUp = () => {


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
  
    onSubmit: (values) => {
      consol.log(values);
    },
  });



  return (
    <div>
      <h4>Registration using Formik</h4>
      
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder='Name'
            onChange={formik.handleChange}
            value={formik.value.name}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.value.email}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.value.name}
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

export default SignUp;