import PropTypes from 'prop-types';
import clsx from 'clsx';

import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';

const CardFavoriteBtn = ({ favorite }) => {
  return (
    <button
      className={clsx(
        'card__label-favorite group-hover:opacity-100 duration-500 ease-in-out',
        favorite ? 'opacity-100' : 'opacity-0'
      )}
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
};
