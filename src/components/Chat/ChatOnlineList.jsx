import PropTypes from 'prop-types';

const ChatOnlineList = ({ nicknameList }) => {
  return (
    <ul className="w-20 h-full border absolute top-0 right-0 px-1">
      <p>Online</p>
      {nicknameList?.map(nick => (
        <li key={nick.id} className="flex items-center gap-2 w-full">
          <div className="block w-2 h-2 bg-accent_green rounded-full flex-shrink-0" />
              <p className="truncate flex-grow">{nick.nick}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChatOnlineList;

ChatOnlineList.propTypes = {
  nicknameList: PropTypes.array,
};
