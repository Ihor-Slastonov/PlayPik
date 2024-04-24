import PropTypes from 'prop-types';

const Image = ({ imgURL = '', alt, w = '220px', h = '340px' }) => {
  return (
    <>
      {imgURL === '' ? (
        <img
          className="card__image"
          src="/placeholder.webp"
          alt={alt}
          width={w}
          height={h}
        />
      ) : (
        <img
          className="card__image"
          src={imgURL}
          alt={alt}
          width={w}
          height={h}
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
};
