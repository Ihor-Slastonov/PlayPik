import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import MyTextInput from '../common/MyTextInput';
import { signUpSchema } from '../../utils/validate/signUpSchema';
import useAuthStore from '../../store/useAuthStore';

const AuthSignUpForm = () => {
  const navigate = useNavigate();
  const setUserInfo = useAuthStore(state => state.setAuthInfo);

  const apiReturn = values => {
    return {
      token: 'dsskj##dsdas',
      name: values.name,
      email: values.email,
      id: 'user-id-placeholder',
      role: 'user',
      imageURL: 'placeholder-url',
    };
  };

  return (
    <Formik
      initialValues={{ name: '', password: '', email: '' }}
      validationSchema={signUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        try {
          const response = apiReturn(values);

          setUserInfo(response);

          // После сохранения, можно перенаправить пользователя на нужную страницу
          // Например, на страницу с данными:
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitting(false);
          resetForm();
          navigate('/mode', { replace: true });
        }
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
