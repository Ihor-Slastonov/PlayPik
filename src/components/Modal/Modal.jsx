import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import Portal from '../Portal';
import ModalCloseBtn from './ModalCloseBtn';

import { modalVariants } from '../../utils/constans/animation';

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

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            variants={modalVariants}
            onClick={handleBackdropClick}
            className="modal__backdrop"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              variants={modalVariants}
              className="modal__layout"
            >
              <ModalCloseBtn closeModal={closeModal} />

              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
