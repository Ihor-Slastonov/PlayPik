import { Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged } = useAuth();
  const shouldRedirect = !isLogged;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
