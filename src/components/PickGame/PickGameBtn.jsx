import { PropTypes } from 'prop-types';

const PickGameBtn = ({ handleClick }) => {
  return (
    <div className="relative mx-auto block h-16 w-36 xl:h-24 xl:w-56">
      <button
        type="button"
        className=" mx-auto block h-full w-full rounded-md
      bg-dark bg-[url('/button-2.webp')] bg-cover bg-center bg-no-repeat"
        onClick={handleClick}
      ></button>
      <div
        className="gradient_rasta absolute inset-0 -z-[1] 
      bg-gradient-to-r blur-md"
      />
    </div>
  );
};

export default PickGameBtn;

PickGameBtn.propTypes = {
  handleClick: PropTypes.func,
};
