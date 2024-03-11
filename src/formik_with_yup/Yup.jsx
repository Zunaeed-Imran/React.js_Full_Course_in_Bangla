import React from 'react'
import { useFormik } from 'formik';

const Yup = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password:''
    },

    onSubmit: (values, { remove }) => {
      console.log(values);
      remove({ values: '' });
    }
  })


  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values}
            required
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Yup;
