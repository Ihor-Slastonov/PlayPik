import useWindowSize from '../../utils/hooks/useWindowSize';

import HeaderBanner from './HeaderBanner';
import Burger from '../Burger/Burger';

import PickGame from '../PickGame/PickGame';
import HeaderBtnGlow from './HeaderBtnGlow';

const Header = () => {
  const { isMobile } = useWindowSize();
  return (
    <header
      className="beforeLine_rasta relative flex h-[100px] 
    items-center justify-center py-2.5 xl:h-[120px]"
    >
      <div className="myContainer">
        <HeaderBanner />
        <HeaderBtnGlow />
        {isMobile && <Burger />}

        <PickGame />
        
      </div>
    </header>
  );
};

export default Header;
