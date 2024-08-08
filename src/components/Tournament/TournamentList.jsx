import { UserCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const TournamentList = ({ onlineList }) => {
  const getIconColorClass = index => {
    const colors = ['text-accent', 'text-accent_green', 'text-accent_red'];
    return colors[index % colors.length];
  };

  return (
    <ul className="flex justify-center gap-4 ">
      {onlineList?.map((list, index) => (
        <li key={list.id} className="flex flex-col items-center border p-2">
          <UserCircleIcon className={`size-12 ${getIconColorClass(index)}`} />
          <p className="text-2xl capitalize">{list.userName}</p>
          <p className="text-accent_red">not ready</p>
        </li>
      ))}
    </ul>
  );
};

export default TournamentList;

TournamentList.propTypes = {
  onlineList: PropTypes.array,
};
