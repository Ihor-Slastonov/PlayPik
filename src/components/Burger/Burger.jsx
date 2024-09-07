import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

const Burger = () => {
  return (
    <>
      <button
        type="button"
        className="center lef-2 absolute top-2 z-[1] flex size-8 
      rounded-md border border-accent_green shadow-md shadow-black"
      >
        <Bars3Icon className="size-6 text-accent" />
      </button>
    </>
  );
};

export default Burger;
