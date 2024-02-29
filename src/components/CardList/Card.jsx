import PropTypes from 'prop-types';

const Card = ({ imgURL, title }) => {
  return (
    <li className="card__container">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>
    </li>
  );
};

export default Card;

Card.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
