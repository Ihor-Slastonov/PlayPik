import { UserCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const TournamentList = ({ onlineList }) => {
  const getIconColorClass = index => {
    const colors = ['text-accent', 'text-accent_green', 'text-accent_red'];
    return colors[index % colors.length];
  };

  return (
    <ul className="flex justify-center gap-4">
      {onlineList?.map((list, index) => (
        <li
          key={list.id}
          className="flex flex-col items-center w-[86px] h-[122px] p-2"
        >
          <UserCircleIcon className={`size-12 ${getIconColorClass(index)}`} />
          <p className="text-2xl capitalize">{list.userName}</p>
          <p className={list.isReady ? 'text-accent_green' : 'text-accent_red'}>
            {list.isReady ? 'ready' : 'not ready'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;

TournamentList.propTypes = {
  onlineList: PropTypes.array,
};
