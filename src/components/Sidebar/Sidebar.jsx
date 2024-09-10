import { useAuth } from '../../utils/hooks/useAuth';

import NoUser from '../NoUser/NoUser';
import SideBarMenu from './SideBarMenu';

const Sidebar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="relative z-[2] hidden shadow-xl shadow-black xl:block">
      {!isLoggedIn ? <NoUser /> : <SideBarMenu />}
    </div>
  );
};

export default Sidebar;
