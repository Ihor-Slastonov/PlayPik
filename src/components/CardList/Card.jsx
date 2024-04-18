import PropTypes from 'prop-types';

const Card = ({ imgURL, title, category }) => {
  return (
    <li className="card__container">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>

      <span className="card__label">{category}</span>
    </li>
  );
};

export default Card;

Card.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
