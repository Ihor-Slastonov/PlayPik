import { Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';

const RestrictedRoute = ({ commponent: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
