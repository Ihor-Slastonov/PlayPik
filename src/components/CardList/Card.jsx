import PropTypes from 'prop-types';

const Card = ({ imgURL, title, category }) => {
  return (
    <li className="card__container">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>

      <span
        className="absolute top-4 right-0 min-w-20 h-8
        rounded-s-lg
         bg-accent_green text-xl font-bold text-center uppercase"
      >
        {category}
      </span>
    </li>
  );
};

export default Card;

Card.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
