import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

const User = () => {
  return (
    <div
      className="beforeLine_green relative h-[140px] w-full 
    py-4 shadow-md shadow-black xl:h-[200px] xl:py-2.5"
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="xl:mx-auto">
          <UserAvatar />
        </div>

        <UserInfo />
      </div>
    </div>
  );
};

export default User;
