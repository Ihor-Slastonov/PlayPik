import { selectUser } from '../../zustand/auth/authSelectors';

import UserAvatar from './UserAvatar';
import {
  AdminUserBtn,
  LogoutUserBtn,
  NotifyUserBtn,
  SettingsUserBtn,
} from './UserButtons';
import UserInfo from './UserInfo';

const User = () => {
  const { role } = selectUser();
  return (
    <div
      className="beforeLine_green relative h-[140px] w-full 
    py-4 shadow-md shadow-black xl:h-[200px] xl:py-2.5"
    >
      {/* User buttons */}
      <LogoutUserBtn />
      <div
        className="absolute left-24 top-4 flex flex-row-reverse 
     gap-4 xl:right-4 xl:flex-col-reverse xl:items-end"
      >
        {role !== 'user' && <AdminUserBtn />}
        <NotifyUserBtn />
        <SettingsUserBtn />
      </div>

      {/* User Avatar */}
      <div className="flex flex-col gap-4 px-4">
        <div className="xl:mx-auto">
          <UserAvatar />
        </div>

        {/* User info */}
        <UserInfo />
      </div>
    </div>
  );
};

export default User;
