import PropTypes from 'prop-types';
import DeleteCardBtn from './DeleteCardBtn';

const Card = ({ id, imgURL, title, category, delete_imgURL }) => {
  return (
    <li className="card__container group">
      <img className="card__image" src={imgURL} alt={title} />
      <p className="card__title">{title}</p>

      <span className="card__label">{category}</span>
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
};
