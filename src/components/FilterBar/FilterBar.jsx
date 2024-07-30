import { useState } from 'react';

import { usePlayPik } from '../../utils/hooks/usePlayPik';
import { filterCategories, filterTypes } from '../../utils/constans/gameValuse';

import CustomSelect from '../common/CustomSelect';
import { filterGames } from '../../utils/filter';
import { getStoredData } from '../../utils/storage';
import { GAMES_KEY } from '../../utils/constans/storageKeys';
import FilterFavorites from './FilterFavorites';

const FilterBar = () => {
  const games = getStoredData(GAMES_KEY);
  const { setGames } = usePlayPik();
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');

  const handleCategoryChange = selectedCategory => {
    setCategory(selectedCategory);
    const filteredGames = filterGames(games, selectedCategory, type);
    setGames(filteredGames);
  };

  const handleTypeChange = selectedType => {
    setType(selectedType);
    const filteredGames = filterGames(games, category, selectedType);
    setGames(filteredGames);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <div className="flex items-center gap-2 text-2xl">
        <p>Categories:</p>
        <CustomSelect
          values={filterCategories}
          defaultValue="all"
          foo={handleCategoryChange}
        />
      </div>

      <div className="flex items-center gap-2 text-2xl">
        <p>Type:</p>
        <CustomSelect
          values={filterTypes}
          defaultValue="all"
          color="green"
          foo={handleTypeChange}
        />
      </div>

      <FilterFavorites />
    </div>
  );
};

export default FilterBar;
