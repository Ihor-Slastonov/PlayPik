import PropTypes from 'prop-types';

import DeleteCardBtn from './DeleteCardBtn';
import { StarIcon, UserIcon, UsersIcon } from '@heroicons/react/24/solid';
import Image from '../common/Image';

const Card = ({
  id,
  imgURL,
  title,
  category,
  delete_imgURL,
  type,
  imageCounter,
  rating,
}) => {
  return (
    <li className="card__container group">
      <Image imgURL={imgURL} alt="title" imageCounter={imageCounter} />
      <p className="card__title">{title}</p>

      <div className="absolute top-4 right-0 flex flex-col items-end gap-2">
        <span className="card__label-category">{category}</span>
        <span className="card__label-type">
          {type === 'single' ? (
            <UserIcon className="w-8 h-8" />
          ) : (
            <UsersIcon className="w-8 h-8" />
          )}
        </span>
        <span className="card__label-rating opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
          <StarIcon className="size-6 text-accent mr-1" />
          {rating}
        </span>
      </div>

      <DeleteCardBtn title={title} delete_imgURL={delete_imgURL} id={id} />
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
  imageCounter: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};
