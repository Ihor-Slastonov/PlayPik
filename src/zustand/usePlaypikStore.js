import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { authSlice } from './auth/authSlice';
import { filtersSlice } from './filters/filtersSlice';
import { gamesSlice } from './games/gamesSlice';

const usePlaypikStore = create(
  persist(
    (...a) => ({
      ...authSlice(...a),
      ...filtersSlice(...a),
      ...gamesSlice(...a),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        categories: state.categories,
        types: state.types,
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        isRefreshing: state.isRefreshing,
      }),
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
