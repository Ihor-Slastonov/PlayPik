import usePlaypikStore from '../usePlaypikStore';

export const selectUser = () => usePlaypikStore(state => state.user);
export const selectIsRefreshing = () =>
  usePlaypikStore(state => state.isRefreshing);
export const selectIsLoggedIn = () =>
  usePlaypikStore(state => state.isLoggedIn);
