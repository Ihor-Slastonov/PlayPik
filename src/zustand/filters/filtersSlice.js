import { getData } from '../../services/playpikApi/fetchData';

export const filtersSlice = set => ({
  categories: [],
  types: [],

  setCategories: categories => set({ categories }),
  setTypes: types => set({ types }),

  fetchFilters: async () => {
    const categories = await getData('/gamesCategories');
    const types = await getData('/gamesTypes');
    set({ categories: categories.data, types: types.data });
  },
});
