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
  const { user } = useStore.getState();

  if (!user.token) {
    return navigate('/');
  }

  try {
    const response = await postData('/auth/verifyUser', null, null, user.token);
    if (!response.data) return;
    useStore.setState(state => (state.isLoggedIn = true));
  } catch (error) {
    return;
  }
};
