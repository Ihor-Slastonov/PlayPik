import { HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

const FilterFavorites = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(prev => !prev);

  return (
    <button
      type="button"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    flex items-center justify-center p-1 group"
      onClick={toggleFavorite}
    >
      <HeartIcon
        className={clsx(
          'size-12 text-accent_red duration-500 ease-in-out',
          !isFavorite ? 'fill-dark' : 'fill-accent_red'
        )}
      />
      <p
        className="absolute -top-6 
          border border-accent_green text-nowrap bg-dark px-1 rounded-md 
      opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 duration-500 ease-in-out"
      >
        If solid will pick only favorite games
      </p>
    </button>
  );
};

export default FilterFavorites;
