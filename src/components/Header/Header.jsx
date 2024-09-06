import React from 'react';
import PickGame from '../PickGame/PickGame';
import clsx from 'clsx';
import { HeaderBanner } from './HeaderBanner';

const Header = () => {
  return (
    <header
      className={clsx(
        'relative h-[70px] py-2.5 xl:h-20',
        'before:absolute before:block before:h-[1px] before:w-full',
        'before:bottom-0 before:z-[2] before:bg-gradient-to-r',
        'before:from-accent_green before:via-accent before:to-accent_red'
      )}
    >
      <HeaderBanner />
      <div
        className="absolute left-1/2 top-[12px] z-[1] 
      h-[40px] w-[100px] -translate-x-1/2 bg-gradient-to-r 
      from-accent_green via-accent to-accent_red blur-md"
      />
      <div className="myContainer">
        <PickGame />
      </div>
    </header>
  );
};

export default Header;
