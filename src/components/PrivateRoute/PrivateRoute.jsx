import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useAuthStore(state => state.token);
  if (!token) {
    return navigate('/mode');
  }

  return children;
};

export default PrivateRoute;
