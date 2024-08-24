import { Form, Formik } from 'formik';
import React from 'react';
import MyTextInput from '../common/MyTextInput';
import { signUpSchema } from '../../utils/validate/signUpSchema';
const AuthSignUpForm = () => {
  return (
    <Formik
      initialValues={{ name: '', password: '', email: '' }}
      validationSchema={signUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        resetForm();
      }}
    >
      <Form className="flex flex-col gap-8">
        <MyTextInput label="nickname" name="name" type="text" id="name" />
        <MyTextInput label="email" name="email" type="email" id="email" />
        <MyTextInput
          label="password"
          name="password"
          type="password"
          id="password"
        />

        <button className="block" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default AuthSignUpForm;
