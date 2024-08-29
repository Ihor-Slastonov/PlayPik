import AuthSignInForm from '../components/Auth/AuthSignInForm';

const LoginPage = () => {
  return (
    <>
      <h2 className="font-bold text-lg xl:text-xl text-center mb-4 xl:mb-2">
        Sign In Form
      </h2>
      <AuthSignInForm />
    </>
  );
};

export default LoginPage;
