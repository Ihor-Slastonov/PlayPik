import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(set =>
  persist(
    set => ({
      token: null,
      name: null,
      email: null,

      setAuthInfo: (token, name, email) => set({ token, name, email }),
      clearAuthInfo: () => set({ token: null, name: null, email: null }),
    }),
    {
      name: 'authStorage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
