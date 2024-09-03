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
      onRehydrateStorage: state => {
        console.log('Rehydrating state:', state);
      },
      onRehydrateStorageError: error => {
        console.error('Rehydration error:', error);
      },
    }
  )
);

export default useStore;
