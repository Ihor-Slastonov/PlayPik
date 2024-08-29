import AuthSignUpForm from '../components/Auth/AuthSignUpForm';

const RegisterPage = () => {
  return (
    <>
      <h2 className="font-bold text-lg xl:text-xl text-center mb-4 xl:mb-2">
        Sign Up Form
      </h2>
      <AuthSignUpForm />
    </>
  );
};

export default RegisterPage;
