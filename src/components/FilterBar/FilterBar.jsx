import { useState } from 'react';

import { usePlayPik } from '../../utils/hooks/usePlayPik';
import {
  filterCategories,
  filterTypes,
  gameListTypes,
} from '../../utils/constans/gameValuse';

import CustomSelect from '../common/CustomSelect';
import { filterGames } from '../../utils/filter';
import { getStoredData } from '../../utils/storage';
import { GAMES_KEY } from '../../utils/constans/storageKeys';

const FilterBar = () => {
  const games = getStoredData(GAMES_KEY);
  const { setGames } = usePlayPik();
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');
  const [gameList, setGameList] = useState('all');

  const handleCategoryChange = selectedCategory => {
    setCategory(selectedCategory);
    const filteredGames = filterGames(games, selectedCategory, type, gameList);
    setGames(filteredGames);
  };

  const handleTypeChange = selectedType => {
    setType(selectedType);
    const filteredGames = filterGames(games, category, selectedType, gameList);
    setGames(filteredGames);
  };

  const handleGameListChange = selectedList => {
    setGameList(selectedList);
    const filteredGames = filterGames(games, category, type, selectedList);
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

      <div className="flex items-center gap-2 text-2xl">
        <p>Game List:</p>
        <CustomSelect
          values={gameListTypes}
          defaultValue="all"
          color="red"
          foo={handleGameListChange}
        />
      </div>
    </div>
  );
};

export default FilterBar;
