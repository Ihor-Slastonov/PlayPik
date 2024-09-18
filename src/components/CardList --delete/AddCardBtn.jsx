import PropTypes from 'prop-types';

import { PlusCircleIcon } from '@heroicons/react/24/outline';

const AddCardBtn = ({ toogleModal }) => {
  return (
    <button
      onClick={toogleModal}
      type="button"
      className="group card__container border-semi-dark 
      flex items-center justify-center hover:border-accent duration-500"
    >
      <PlusCircleIcon className="group-hover:text-accent text-semi-dark w-20 h-20 duration-500" />
    </button>
  );
};

export default AddCardBtn;

AddCardBtn.propTypes = {
  toogleModal: PropTypes.func,
};
