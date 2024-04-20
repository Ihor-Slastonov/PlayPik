import PropTypes from 'prop-types';

import DeleteCardBtn from './DeleteCardBtn';
import { UserIcon, UsersIcon } from '@heroicons/react/24/solid';

const Card = ({ id, imgURL, title, category, delete_imgURL, type }) => {
  return (
    <li className="card__container group">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>

      <span className="card__label">{category}</span>
      <span className="card__label-secondary">
        {type === 'single' ? (
          <UserIcon className="w-8 h-8" />
        ) : (
          <UsersIcon className="w-8 h-8" />
        )}
      </span>
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
};
