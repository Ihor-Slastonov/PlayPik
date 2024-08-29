import useStore from '../../zustand/useStrore';

export const useAuth = () => {
  const token = useStore(state => state.token);

  const isLogged = !!token;

  return { isLogged };
};
