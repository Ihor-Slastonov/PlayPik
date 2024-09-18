import PropTypes from 'prop-types';
import clsx from 'clsx';

import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { changeGameFavoriteField } from '../../services/playpikApi/games';
import { usePlayPik } from '../../utils/hooks/usePlayPik';

const CardFavoriteBtn = ({ favorite, id }) => {
  const { games, setGames } = usePlayPik();

  const handleClick = async () => {
    await changeGameFavoriteField(id, favorite);
    const updatedGames = games.map(game =>
      game.id === id ? { ...game, favorite: !game.favorite } : game
    );
    setGames(updatedGames);
  };

  return (
    <button
      className={clsx(
        'card__label-favorite group-hover:opacity-100 duration-500 ease-in-out',
        favorite ? 'opacity-100' : 'opacity-0'
      )}
      onClick={handleClick}
    >
      {favorite ? (
        <SolidHeartIcon className="size-6 text-accent_red" />
      ) : (
        <OutlineHeartIcon className="size-6 text-accent_red" />
      )}
    </button>
  );
};

export default CardFavoriteBtn;

CardFavoriteBtn.propTypes = {
  favorite: PropTypes.bool,
  id: PropTypes.string,
};
