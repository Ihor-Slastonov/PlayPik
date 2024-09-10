import usePlaypikStore from '../usePlaypikStore';

const selectCategories = () => usePlaypikStore(state => state.categories);

const selectTypes = () => usePlaypikStore(state => state.types);

const selectFetchFilters = () => usePlaypikStore(state => state.fetchFilters);

export { selectCategories, selectTypes, selectFetchFilters };
