import PropTypes from 'prop-types';

const ChatOnlineList = ({ name }) => {
  return <div>{name}</div>;
};

export default ChatOnlineList;

ChatOnlineList.propTypes = {
  name: PropTypes.object,
};
