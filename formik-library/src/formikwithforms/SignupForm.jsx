import React from 'react';
import { Formik, Form, Field } from 'formik';

function SignupForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <label>Email</label>
          <Field name="email" type="email" />

          <label>Password</label>
          <Field name="password" type="password" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
