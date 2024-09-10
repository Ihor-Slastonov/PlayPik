import { useState } from 'react';

import {
  filterCategories,
  filterTypes,
  gameListTypes,
} from '../../utils/constans/gameValuse';

import CustomSelect from '../common/CustomSelect';
import { filterGames } from '../../utils/filter';

const FilterBar = () => {
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');
  const [gameList, setGameList] = useState('all');

  const handleCategoryChange = selectedCategory => {
    setCategory(selectedCategory);
    const filteredGames = filterGames(games, selectedCategory, type, gameList);
  };

  const handleTypeChange = selectedType => {
    setType(selectedType);
    const filteredGames = filterGames(games, category, selectedType, gameList);
  };

  const handleGameListChange = selectedList => {
    setGameList(selectedList);
    const filteredGames = filterGames(games, category, type, selectedList);
  };

  return (
    <div className="absolute top-[100px] flex items-center gap-4">
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
