import { Img } from 'react-image';
import { selectUser } from '../../zustand/auth/authSelectors';

const UserAvatar = () => {
  const { imageURL } = selectUser();

  return (
    <div className="size-24 rounded-full bg-green p-1 shadow-md shadow-black">
      <div className="size-full rounded-full">
        <Img
          src={imageURL}
          alt="user avatar"
          loader={<div>Loading...</div>}
          unloader={<div>Failed to load image</div>}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
