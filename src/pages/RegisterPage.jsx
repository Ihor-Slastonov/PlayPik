import { useState } from 'react';
import AuthSignUpForm from '../components/Auth/AuthSignUpForm';

const RegisterPage = () => {
  const [isFormSend, setIsFormSend] = useState(false);
  return (
    <>
      <h2 className="font-bold text-lg xl:text-xl text-center mb-4 xl:mb-2">
        Sign Up Form
      </h2>
      {!isFormSend ? (
        <AuthSignUpForm setIsFormSend={setIsFormSend} />
      ) : (
        <p className="mt-28 font-bold text-center text-accent capitalize">
          Check your email
        </p>
      )}
    </>
  );
};

export default RegisterPage;
