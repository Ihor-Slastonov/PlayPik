import { Img } from 'react-image';

import { UserIcon, UsersIcon } from '@heroicons/react/24/solid';

const GameCard = ({ game, category, type }) => {
  const { title, imageUrl, } = game;

  return (
    <li className="card__container">
      <Img
        src={imageUrl}
        alt={`game ${title} poster`}
        loader={<div>Loading...</div>}
        unloader={<div>Failed to load image</div>}
        className="card__image"
      />
      <p className="card__title">{title}</p>

      <div className="absolute right-0 top-4 flex flex-col items-end gap-2">
        <span className="card__label-category">{category}</span>
        <span className="card__label-type">
          {type === 'single' ? (
            <UserIcon className="size-8" />
          ) : (
            <UsersIcon className="size-8" />
          )}
        </span>
      </div>
    </li>
  );
};

export default GameCard;
