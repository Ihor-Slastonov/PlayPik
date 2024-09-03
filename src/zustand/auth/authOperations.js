import toast from 'react-hot-toast';
import { postData } from '../../services/playpikApi/fetchData';
import useStore from '../useStrore';

export const signUpNewUser = async values => {
  try {
    toast('Sending data');
    const user = await postData('auth/register', values);
    return user;
  } catch (error) {
    toast.error(error.message || 'Registration failed');
  }
};

export const signInUser = async values => {
  const { setAuthInfo, setIsLoggedIn } = useStore.getState();

  try {
    toast('Sending data');
    const user = await postData('auth/login', values);
    if (user) {
      setAuthInfo(user.data);
      setIsLoggedIn(true);
    }
    return user.data;
  } catch (error) {
    toast.error(error.message || 'Sign in failed');
  }
};

export const refreshUser = async navigate => {
  const { user, setIsLoggedIn } = useStore.getState();

  if (!user?.token) {
    navigate('/');
    return;
  }

  try {
    const response = await postData('/auth/verifyUser', null, null, user.token);
    if (response?.data) {
      setIsLoggedIn(true); // Обновляем только нужное состояние
    } else {
      setIsLoggedIn(false); // Если нет данных, пользователь не залогинен
    }
  } catch (error) {
    toast.error('Invalid token');
    setIsLoggedIn(false);
    navigate('/login');
  }
};
