import * as Yup from 'yup';

export const signUpSchema = () =>
  Yup.object({
    name: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(15, 'Must be 15 characters or less')
      .required('required'),
    email: Yup.string().email('Invalid email address').required('required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(12, 'Must be 12 characters or less')
      .required('required'),
  });

export const signInSchema = () =>
  Yup.object({
    email: Yup.string().email('Invalid email address').required('required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(12, 'Must be 12 characters or less')
      .required('required'),
  });
