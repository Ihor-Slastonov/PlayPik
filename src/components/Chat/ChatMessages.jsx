import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ChatMessages = ({ messages, name }) => {
  const endOfMessagesRef = useRef(null); // Создаем реф для прокрутки вниз

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ul className="flex-grow overflow-auto p-4">
      {messages.map((msg, idx) => (
        <li
          key={idx}
          className={`mb-2 flex ${
            msg.name === name ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="inline-block">
            <p className="font-bold">{msg.name === name ? 'You' : msg.name}</p>
            <p
              className={`px-2 rounded-lg text-dark max-w-xs break-words
              ${msg.name === name ? 'bg-accent_green' : 'bg-accent'}`}
            >
              {msg.message}
            </p>
          </div>
        </li>
      ))}
      <div ref={endOfMessagesRef} /> {/* Реф для прокрутки */}
    </ul>
  );
};

export default ChatMessages;

ChatMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
