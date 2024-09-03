import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../../zustand/auth/authSelectors';


export const useAuth = () => {
  const isLoggedIn = selectIsLoggedIn();
  const isRefreshing = selectIsRefreshing();

  return { isLoggedIn, isRefreshing };
};
