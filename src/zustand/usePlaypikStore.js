import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authSlice } from './auth/authSlice';

const usePlaypikStore = create(
  persist(
    (...a) => ({
      ...authSlice(...a),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: state => {
        console.log('hydration starts');
        return (state, error) => {
          if (error) {
            console.error('an error happened during hydration', error);
          } else {
            console.log('hydration finished', state);
          }
        };
      },
    }
  )
);

export default usePlaypikStore;
