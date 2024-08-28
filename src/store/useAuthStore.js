import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authInitialState } from '../utils/constans/initialValues';

const useAuthStore = create(
  persist(
    set => ({
      ...authInitialState,

      setAuthInfo: user => {
        const { id, role, token, name, email, imageURL } = user;
        return set({ id, role, token, name, email, imageURL });
      },

      clearAuthInfo: () => set(authInitialState),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ token: state.token }),
    }
  )
);

export default useAuthStore;
