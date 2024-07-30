import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { changeGameFavoriteField } from '../../services/playpikApi/games';

const CardFavoriteBtn = ({ favorite, id }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleClick = async () => {
    const favoriteField = await changeGameFavoriteField(id, favorite);
    setIsFavorite(favoriteField);
  };

  return (
    <button
      className={clsx(
        'card__label-favorite group-hover:opacity-100 duration-500 ease-in-out',
        isFavorite ? 'opacity-100' : 'opacity-0'
      )}
      onClick={handleClick}
    >
      {isFavorite ? (
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
