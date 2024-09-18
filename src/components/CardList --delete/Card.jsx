import PropTypes from 'prop-types';

import DeleteCardBtn from './DeleteCardBtn';
import {
  // StarIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

import Image from '../common/Image';
import CardFavoriteBtn from './CardFavoriteBtn';

const Card = ({
  id,
  imgURL,
  title,
  category,
  delete_imgURL,
  type,
  // rating,
  favorite,
}) => {
  return (
    <li className="card__container group">
      <Image imgURL={imgURL} alt="title" />
      <p className="card__title">{title}</p>

      <div className="absolute top-4 right-0 flex flex-col items-end gap-2">
        <span className="card__label-category">{category}</span>
        <span className="card__label-type">
          {type === 'single' ? (
            <UserIcon className="size-8" />
          ) : (
            <UsersIcon className="size-8" />
          )}
        </span>
        <CardFavoriteBtn favorite={favorite} id={id} />
      </div>

      <div className="absolute top-4 left-1 flex flex-col gap-2">
        <DeleteCardBtn title={title} delete_imgURL={delete_imgURL} id={id} />
      </div>
    </li>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  delete_imgURL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number,
  favorite: PropTypes.bool,
};
