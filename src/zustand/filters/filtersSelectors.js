import usePlaypikStore from '../usePlaypikStore';

const selectCategories = () => usePlaypikStore(state => state.categories);

const selectTypes = () => usePlaypikStore(state => state.types);

const selectFetchFilters = () => usePlaypikStore(state => state.fetchFilters);

const selectedCategory = () => usePlaypikStore(state => state.selectedCategory);

const selectedType = () => usePlaypikStore(state => state.selectedType);

const filterGames = () => usePlaypikStore(state => state.filterGames);

export {
  selectCategories,
  selectTypes,
  selectFetchFilters,
  selectedCategory,
  selectedType,
  filterGames,
};
