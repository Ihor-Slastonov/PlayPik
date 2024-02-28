import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div
          onClick={handleBackdropClick}
          className="w-screen h-screen 
        fixed top-0 left-0 bottom-0 right-0
        bg-tr_dark backdrop-blur-sm"
        >
          <div
            className="min-w-[400px] min-h-[400px] p-4 
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          bg-dark rounded-xl shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-0c right-0
              w-8 h-8 flex items-center justify-center
               group rounded-full border border-semi-dark
               hover:border-accent duration-500"
            >
              <XMarkIcon
                className="text-semi-dark w-6 h-6 
              group-hover:text-accent duration-500"
              />
            </button>
            {children}
          </div>
        </div>,
        document.getElementById('modal-root')
      )
    : null;
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
