import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

const YoutubeForm = () => {

  const initialValues = {
    name: '',
    email: '',
    channel: ''
  }

  const onSubmit = values => {
    console.log('form values - ', values)
  };

  const validate = values => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.channel) {
      errors.channel = 'Required'
    }

    return errors;
  };




  // console.log('form errors - ', formik.errors)

  // console.log('visited fields - ', formik.touched)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <Field type="text" name="name" id="" placeholder='Name'
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          />
          <ErrorMessage name='name' />
        </div>

        <br /> <br />

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <Field type="email" name="email" id="" placeholder='Email'
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          />
          <ErrorMessage name='email' />
        </div>

        <br /><br />
        <div>
          <label htmlFor="channel">Channel</label>
          <br />
          <Field type="text" name="channel" id="" placeholder='Channel'
          // value={formik.values.channel}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          />
          <ErrorMessage name='channel' />
        </div>
        <br />

        <button type="submit">Submit</button>

      </Form>
    </Formik>
  );
};

export default YoutubeForm;