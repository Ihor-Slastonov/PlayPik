import React from 'react';

import HeaderBanner from './HeaderBanner';
import Burger from '../Burger/Burger';

import PickGame from '../PickGame/PickGame';
import HeaderBtnGlow from './HeaderBtnGlow';

const Header = () => {
  return (
    <header
      className="beforeLine_rasta relative flex h-[100px] 
    items-center justify-center py-2.5 xl:h-20"
    >
      <div className="myContainer">
        <HeaderBanner />
        <HeaderBtnGlow />
        <Burger />

        <PickGame />
      </div>
    </header>
  );
};

export default Header;
