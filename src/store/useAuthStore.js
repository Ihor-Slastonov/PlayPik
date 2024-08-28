import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authInitialState } from '../utils/constans/initialValues';

const useAuthStore = create(set =>
  persist(
    set => ({
      id: null,
      role: null,
      token: null,
      name: null,
      email: null,
      imageURL: null,

      setAuthInfo: (token, name, email, id, role, imageURL) =>
        set({ token, name, email, id, role, imageURL }),
      clearAuthInfo: () =>
        set({
          id: null,
          role: null,
          token: null,
          name: null,
          email: null,
          imageURL: null,
        }),
    }),
    {
      name: 'authStorage',
      storage: createJSONStorage(),
      partialize: state => ({ token: state.token }),
    }
  )
);

export default useAuthStore;
