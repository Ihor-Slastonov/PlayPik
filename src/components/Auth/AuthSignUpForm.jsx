import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import MyTextInput from '../common/MyTextInput';
import { signUpSchema } from '../../utils/validate/signUpSchema';
import { signUpNewUser } from '../../zustand/auth/authOperations';

const AuthSignUpForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', password: '', email: '' }}
      validationSchema={signUpSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await signUpNewUser(values);
        if (response) {
          resetForm();
          navigate('/mode', { replace: true });
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-8">
          <MyTextInput label="nickname" name="name" type="text" id="name" />
          <MyTextInput label="email" name="email" type="email" id="email" />
          <MyTextInput
            label="password"
            name="password"
            type="password"
            id="password"
          />

          <button
            className="btn_inline_green"
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

export default AuthSignUpForm;
