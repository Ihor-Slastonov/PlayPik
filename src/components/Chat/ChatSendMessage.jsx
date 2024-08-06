import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

const ChatSendMessage = ({ handleSendMessage, socket, nickname }) => {
  const [messageField, setMessageField] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiPickerRef = useRef(null);

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

  const addEmoji = emojiData => {
    console.log(emojiData.emoji);
    setMessageField(prev => prev + emojiData.emoji);
  };

  const handleClickOutside = event => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker]);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 bg-semi-dark rounded-md relative"
    >
      <input
        type="text"
        placeholder="enter your message"
        onChange={onFieldChange}
        value={messageField}
        className="w-full rounded-md pl-4 pr-10 py-2 text-dark"
      />
      <button
        type="button"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="ml-2 absolute top-1/2 -translate-y-1/2 right-3 
        w-10 h-10  flex center group"
      >
        <FaceSmileIcon className="size-6 text-tr_dark group-hover:scale-110 duration-500 ease-in-out" />
        {/* 😊 */}
      </button>
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          style={{ position: 'absolute', bottom: '60px', right: '20px' }}
        >
          <EmojiPicker theme="dark" onEmojiClick={addEmoji} />
        </div>
      )}
    </form>
  );
};

export default ChatSendMessage;

ChatSendMessage.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  nickname: PropTypes.string.isRequired,
};
