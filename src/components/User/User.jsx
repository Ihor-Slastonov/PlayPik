import { selectUser } from '../../zustand/auth/authSelectors';
import UserAvatar from './UserAvatar';

const User = () => {
  const { id, name } = selectUser();
  return (
    <div
      className="beforeLine_green relative h-[140px] w-full 
    py-4 shadow-md shadow-black xl:h-[200px] xl:py-2.5"
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="xl:mx-auto">
          <UserAvatar />
        </div>

        <div className="flex gap-8 xl:flex-col xl:gap-3">
          <p className="xl:text-lg">
            nickname:
            <span className="textWrapper_green ml-2 font-bold">
              <span className="textWrapper_text">{name || 'no name'}</span>
            </span>
          </p>

          <p className="xl:text-lg">
            account_id:
            <span className="textWrapper_yellow ml-2 font-bold">
              <span className="textWrapper_text">{id || 'no id'}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
