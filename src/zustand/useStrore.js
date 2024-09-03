import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authSlice } from './auth/authSlice';

const useStore = create(
  persist(
    (...a) => ({
      ...authSlice(...a),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

export default useStore;
