import useAuthStore from '../../store/useAuthStore';

export const useAuth = () => {
  const token = useAuthStore(state => state.token);

  const isLogged = !!token;

  return { isLogged };
};
