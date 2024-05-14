import { usePlayPik } from '../../utils/hooks/usePlayPik';
import { filterCategories } from '../../utils/constans/gameValuse';

import CustomSelect from '../common/CustomSelect';
import { getStoredData } from '../../utils/storage';
import { GAMES_KEY } from '../../utils/constans/storageKeys';

const FilterBar = () => {
  const { setGames } = usePlayPik();
  const games = getStoredData(GAMES_KEY);

  const handleCategory = value => {
    let filteredGames;

    if (value === 'all') {
      filteredGames = games.filter(game => game.category !== value);
      setGames(filteredGames);
    } else if (value === 'pc + pc vr') {
      filteredGames = games.filter(game => game.category !== 'quest');
      setGames(filteredGames);
    } else {
      filteredGames = games.filter(game => game.category === value);
      setGames(filteredGames);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-2xl">
        <p>Categories:</p>
        <CustomSelect
          values={filterCategories}
          defaultValue="all"
          foo={handleCategory}
        />
      </div>

      {/* <div className="flex items-center gap-2 text-2xl">
        <p>Categories:</p>
        <CustomSelect />
      </div> */}
    </div>
  );
};

export default FilterBar;
