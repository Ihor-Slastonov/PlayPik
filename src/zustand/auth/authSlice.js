import { authInitialState } from '../../utils/constans/initialValues';

export const authSlice = set => ({
  ...authInitialState,

  setIsRefreshing: value => set({ isRefreshing: value }),

  setIsLoggedIn: value => set({ isLoggedIn: value }),

  setAuthInfo: user => set({ user }),

  clearAuthInfo: () => set(authInitialState),
});
