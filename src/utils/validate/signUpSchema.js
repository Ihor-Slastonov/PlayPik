import * as Yup from 'yup';

export const signUpSchema = () =>
  Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('required'),
    email: Yup.string().email('Invalid email address').required('required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .max(40, 'Must be 40 characters or less')
      .required('required'),
  });
