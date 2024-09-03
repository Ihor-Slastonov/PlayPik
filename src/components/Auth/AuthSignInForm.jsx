import toast from 'react-hot-toast';

import { Form, Formik } from 'formik';
import { signInSchema } from '../../utils/validate/signUpSchema';

import MyTextInput from '../common/MyTextInput';
import { signInUser } from '../../zustand/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const AuthSignInForm = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await signInUser(values);

        if (response) {
          toast.success('Success');
          resetForm();
          navigate('/mode', { replace: true });
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-8">
          <MyTextInput label="email" name="email" type="email" id="email" />
          <MyTextInput
            label="password"
            name="password"
            type="password"
            id="password"
          />

          <button
            className="btn_inline_green mt-4 xl:mt-8"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthSignInForm;
