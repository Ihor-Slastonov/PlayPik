import useStore from '../useStrore';

const { token, isRefreshing, isLoggedIn } = useStore.getState();

export const selectToken = () => token;

export const selectIsRefreshing = () => isRefreshing;
export const selectIsLoggedIn = () => isLoggedIn;
