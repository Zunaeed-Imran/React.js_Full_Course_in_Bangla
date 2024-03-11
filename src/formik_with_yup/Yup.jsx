import React from 'react';
import { useFormik } from 'formik';
import {string} from 'yup';

const SignUp2 = () => {
  // yup package
  let userSchema = Yup.object({
    name: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().password()
  });

  // this is formik package.
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: userSchema, // Apply validation schema
    // this is formik package.
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: { name: '', email: '', password: '' } });
    },
  });

  return (
    <div>
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp2;
