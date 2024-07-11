import PropTypes from 'prop-types';

const Image = ({
  imgURL = 'no image',
  alt,
  w = '220px',
  h = '340px',
  imageCounter,
}) => {
  return (
    <>
      {imgURL === '' || imgURL === 'no image' ? (
        <img
          className="card__image"
          src="/placeholder.webp"
          alt={alt}
          width={w}
          height={h}
          onLoad={imageCounter}
        />
      ) : (
        <img
          className="card__image"
          src={imgURL}
          alt={alt}
          width={w}
          height={h}
          onLoad={imageCounter}
        />
      )}
    </>
  );
};

export default Image;

Image.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
  imageCounter: PropTypes.func,
};
