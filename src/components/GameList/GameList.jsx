import { useRef, useEffect } from 'react';
import GameCard from './GameCard';

import {
  selectCategories,
  selectTypes,
} from '../../zustand/filters/filtersSelectors';
import { gamesSelector } from '../../zustand/games/gamesSelectors';
import gsap from 'gsap';

const GameList = () => {
  const games = gamesSelector();
  const categories = selectCategories();
  const types = selectTypes();
  const listRef = useRef(null);

  useEffect(() => {
    const listItems = listRef.current;
    gsap.fromTo(
      listItems,
      { opacity: 0, scale: 1.1, filter: 'blur(20px)' }, // Начальное состояние
      {
        opacity: 1,

        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        filter: 'blur(0px)',
      }
    );
  }, [games]);

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
      ref={listRef}
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
