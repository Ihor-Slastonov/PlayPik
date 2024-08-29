import { authInitialState } from '../../utils/constans/initialValues';

export const authSlice = set => ({
  setAuthInfo: user => {
    const { id, role, token, name, email, imageURL } = user;
    return set({ id, role, token, name, email, imageURL });
  },

  clearAuthInfo: () => set(authInitialState),
});
