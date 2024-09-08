import { useState } from 'react';

import Modal from '../Modal/Modal';

import { Bars3Icon } from '@heroicons/react/24/outline';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      <Modal isOpen={isOpen} onClose={toggle}></Modal>
    </>
  );
};

export default Burger;
