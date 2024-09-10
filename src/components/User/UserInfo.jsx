import { selectUser } from '../../zustand/auth/authSelectors';

const UserInfo = () => {
  const { id, name } = selectUser();
  return (
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
  );
};

export default UserInfo;
