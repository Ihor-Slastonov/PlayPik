import { Form, Formik } from 'formik';
import MyTextInput from '../common/MyTextInput';
import { signUpSchema } from '../../utils/validate/signUpSchema';
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AuthSignUpForm = () => {
  const setAuthInfo = useAuthStore(state => state.setAuthInfo);
  const navigate = useNavigate();

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

          setAuthInfo(token, name, email, id, role, imageURL);
          // После сохранения, можно перенаправить пользователя на нужную страницу
          // Например, на страницу с данными:
          navigate('/mode');
        } catch (error) {
          console.error(error);
        }
        // setSubmitting(false);
        // resetForm();
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
