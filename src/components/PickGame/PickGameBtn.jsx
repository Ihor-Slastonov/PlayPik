import { PropTypes } from 'prop-types';

const PickGameBtn = ({ handleClick }) => {
  return (
    <button
      type="button"
      className="relative z-[4] mx-auto block h-12 w-[100px]
      rounded-md bg-[url('/button-2.webp')] bg-cover bg-center bg-no-repeat"
      onClick={handleClick}
    ></button>
  );
};

export default PickGameBtn;

PickGameBtn.propTypes = {
  handleClick: PropTypes.func,
};
