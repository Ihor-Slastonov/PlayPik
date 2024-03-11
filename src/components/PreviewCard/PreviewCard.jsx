import PropTypes from 'prop-types';

const PreviewCard = ({ imgURL }) => {
  return (
    <div className="card__container">
      {!imgURL ? (
        <img
          className="card__image"
          src="https://placehold.co/220x340/222831/393E46/png?text=Preview\nImage+size+240+X+320"
          alt="preview"
          width={240}
          height={320}
        />
      ) : (
        <img className="card__image" src={imgURL} alt="preview" />
      )}
    </div>
  );
};

export default PreviewCard;

PreviewCard.propTypes = {
  imgURL: PropTypes.string,
};
