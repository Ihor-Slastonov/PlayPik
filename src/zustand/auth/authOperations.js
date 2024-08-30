import toast from 'react-hot-toast';
import { postData } from '../../services/playpikApi/fetchData';
import useStore from '../useStrore';

export const signUpNewUser = async values => {
  const { setAuthInfo } = useStore.getState();

  try {
    toast('Sending data');
    const user = await postData('auth/register', values);
    if (user) {
      setAuthInfo(user.data);
    }
    return user;
  } catch (error) {
    toast.error(error.message || 'Registration failed');
  }
};

export const signInUser = async values => {
  const { setAuthInfo } = useStore.getState();

  try {
    toast('Sending data');
    const user = await postData('auth/login', values);
    if (user) {
      setAuthInfo(user.data);
    }
    return user;
  } catch (error) {
    toast.error(error.message || 'Sign in failed');
  }
};
