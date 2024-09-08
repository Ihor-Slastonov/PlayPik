import { useState } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';

import Modal from '../Modal/Modal';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="center lef-2 absolute top-2 z-[1] flex size-8 
      rounded-md border border-accent_green shadow-md shadow-black"
      >
        <Bars3Icon className="size-6 text-accent" />
      </button>

      <Modal isOpen={isOpen} onClose={toggle}>
        {!isLoggedIn && (
          <div
            className="center flex h-full w-full
           flex-col gap-1"
          >
            <Link to="/login" className="btn_outline_green">
              Sign In
            </Link>
            <p>or</p>
            <Link to="/register" className="btn_outline_yellow">
              Sign Up
            </Link>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Burger;
