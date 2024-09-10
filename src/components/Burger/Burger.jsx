import { useState } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';

import Modal from '../Modal/Modal';
import NoUser from '../NoUser/NoUser';

import { Bars3Icon } from '@heroicons/react/24/outline';
import User from '../User/User';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="center lef-2 absolute top-2 z-[5] flex size-8 
      rounded-md border border-accent_green shadow-md shadow-black"
      >
        <Bars3Icon className="size-6 text-accent" />
      </button>

      <Modal isOpen={isOpen} onClose={toggle}>
        {!isLoggedIn && <NoUser />}
        <User />
      </Modal>
    </>
  );
};

export default Burger;
