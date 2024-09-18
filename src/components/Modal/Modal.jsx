import { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from '../Portal';
import ModalCloseBtn from './ModalCloseBtn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Modal = ({ isOpen, onClose, children }) => {
  const backdropRef = useRef();
  const modalRef = useRef();

  const { contextSafe } = useGSAP({
    scope: modalRef,
  });

  // Анимация при монтировании и размонтировании модального окна
  const onEnter = contextSafe(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
    gsap.fromTo(
      modalRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.5, ease: 'power2.out' }
    );
  });

  const onExit = contextSafe(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.5, ease: 'power2.out' }
    );
    gsap.fromTo(
      modalRef.current,
      { y: '0%' },
      { y: '100%', duration: 0.5, ease: 'power2.out' }
    );
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Portal containerId="modal-root">
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="modal"
        nodeRef={modalRef}
        unmountOnExit
        onEnter={onEnter}
        onExit={onExit}
      >
        <div
          ref={backdropRef}
          className="fixed left-0 top-0 z-[1000] h-screen
          w-screen bg-tr_dark backdrop-blur-sm"
        >
          <div
            ref={modalRef}
            className="absolute bottom-0 left-0 h-[98%] w-full rounded-t-3xl bg-dark_deep"
          >
            <ModalCloseBtn onClose={onClose} />
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
