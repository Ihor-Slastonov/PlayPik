import { useState } from 'react';
import PropTypes from 'prop-types';

const ChatSendMessage = ({ handleSendMessage, socket, nickname }) => {
  const [messageField, setMessageField] = useState('');

  const onFieldChange = e => {
    setMessageField(e.target.value);
    if (e.target.value) {
      socket.emit('typing', nickname);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSendMessage(messageField.trim());
    setMessageField('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-semi-dark rounded-md">
      <input
        type="text"
        placeholder="enter your message"
        onChange={onFieldChange}
        value={messageField}
        className="w-full rounded-md px-4 py-2 text-dark"
      />
    </form>
  );
};

export default ChatSendMessage;

ChatSendMessage.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  nickname: PropTypes.string.isRequired,
};
