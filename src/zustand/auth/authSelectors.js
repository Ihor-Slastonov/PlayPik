import useStore from '../usePlaypikStore';

export const selectUser = () => useStore(state => state.user);
export const selectIsRefreshing = () => useStore(state => state.isRefreshing);
export const selectIsLoggedIn = () => useStore(state => state.isLoggedIn);
