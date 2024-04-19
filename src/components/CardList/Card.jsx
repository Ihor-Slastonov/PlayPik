import PropTypes from 'prop-types';

import { TrashIcon } from '@heroicons/react/24/solid';

const Card = ({ imgURL, title, category }) => {
  return (
    <li className="card__container">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>

      <span className="card__label">{category}</span>

      <button
        className="absolute top-4 left-1 w-8 h-8
        rounded-md text-accent_red bg-dark
      flex items-center justify-center border border-accent_red"
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </li>
  );
};

export default Card;

Card.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
