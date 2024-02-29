import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/24/solid';

const ModalCloseBtn = ({ closeModal }) => {
  return (
    <button
      onClick={closeModal}
      className="absolute top-0 right-0
              w-8 h-8 flex items-center justify-center
               group rounded-full border border-semi-dark
               hover:border-accent duration-500"
    >
      <XMarkIcon
        className="text-semi-dark w-6 h-6 
              group-hover:text-accent duration-500"
      />
    </button>
  );
};

export default ModalCloseBtn;

ModalCloseBtn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
