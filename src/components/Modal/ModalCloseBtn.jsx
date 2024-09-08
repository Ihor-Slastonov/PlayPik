import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/24/solid';

const ModalCloseBtn = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="group absolute right-2
              top-2 flex h-8 w-8 items-center
               justify-center rounded-full border border-accent_red
               duration-500 hover:border-accent"
    >
      <XMarkIcon
        className="h-6 w-6 text-accent_red
              duration-500 group-hover:text-accent"
      />
    </button>
  );
};

export default ModalCloseBtn;

ModalCloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};
