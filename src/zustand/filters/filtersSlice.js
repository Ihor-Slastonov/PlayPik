import { getData } from '../../services/playpikApi/fetchData';

export const filtersSlice = set => ({
  categories: [],
  types: [],

  selectedCategory: 'all',
  selectedType: 'all',

  setCategories: categories => set({ categories }),
  setTypes: types => set({ types }),

  setSelectedCategory: category => set({ selectedCategory: category }),
  setSelectedType: type => set({ selectedType: type }),

  fetchFilters: async () => {
    const categories = await getData('/gamesCategories');
    const types = await getData('/gamesTypes');
    set({ categories: categories.data, types: types.data });
  },

  filterGames: () =>
    set(state => {
      let filtered = state.games;

      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(
          game => game.category === state.selectedCategory
        );
      }

      if (state.selectedType !== 'all') {
        filtered = filtered.filter(game => game.type === state.selectedType);
      }

      return { filteredGames: filtered };
    }),
});
