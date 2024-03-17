import React from 'react';
import { useFormik } from 'formik';

const SignUp = () => {

  // this is formik package
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    // also `resetForm` is formik package
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({ values: '' });
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
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>
        <div>
          <button type="submit">Registration</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
