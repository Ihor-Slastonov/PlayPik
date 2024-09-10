import { selectUser } from '../../zustand/auth/authSelectors';
import UserAvatar from './UserAvatar';

const User = () => {
  const { id, name } = selectUser();
  return (
    <div className="beforeLine_rasta xl:beforeLine_green relative w-full py-2.5 xl:h-[200px]">
      <div className="flex gap-4 px-4 xl:flex-col">
        <UserAvatar />

        <div className="flex flex-col gap-2">
          <p>
            nickname: <span>{name || 'no name'}</span>
          </p>

          <p>
            userId: <span>{id || 'no id'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
