import useWindowSize from '../../utils/hooks/useWindowSize';

import HeaderBanner from './HeaderBanner';
import Burger from '../Burger/Burger';

import PickGame from '../PickGame/PickGame';
import Filter from '../Filter/Filter';

const Header = () => {
  const { isMobile } = useWindowSize();
  return (
    <header
      className="beforeLine_rasta relative flex h-[100px] 
    items-center justify-center py-2.5 xl:h-[200px]"
    >
      <div className="myContainer">
        <HeaderBanner />
        {isMobile && <Burger />}

        <div className="relative z-[4] flex flex-col gap-4">
          <PickGame />
          {!isMobile && <Filter />}
        </div>
      </div>
    </header>
  );
};

export default Header;
