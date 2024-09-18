import GameCard from './GameCard';

import {
  selectCategories,
  selectTypes,
} from '../../zustand/filters/filtersSelectors';
import { gamesSelector } from '../../zustand/games/gamesSelectors';

const GameList = () => {
  const games = gamesSelector();
  const categories = selectCategories();
  const types = selectTypes();

  const getCategoryName = categoryId => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  const getTypeName = typeId => {
    const type = types.find(type => type.id === typeId);
    return type ? type.name : 'Unknown';
  };

  return (
    <ul
      className="flex flex-col items-center gap-4 
    xl:flex-row xl:flex-wrap xl:justify-center xl:gap-6"
    >
      {games?.map(game => (
        <GameCard
          key={game.id}
          game={game}
          category={getCategoryName(game.categoryId)}
          type={getTypeName(game.typeId)}
        />
      ))}
    </ul>
  );
};

export default GameList;
