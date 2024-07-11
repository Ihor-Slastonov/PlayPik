import { PropTypes } from 'prop-types';

const PickGameBtn = ({ handleClick }) => {
  return (
    <button
      type="button"
      className="w-52 h-20 block mx-auto  rounded-md
                bg-[url('/button.webp')] bg-cover bg-no-repeat bg-center
                hover:-translate-y-1 duration-500 hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.75)]
                active:-translate-y-[2px] outline-none"
      onClick={handleClick}
    ></button>
  );
};

export default PickGameBtn;

PickGameBtn.propTypes = {
  handleClick: PropTypes.func,
};
