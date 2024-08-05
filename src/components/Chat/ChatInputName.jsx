import { useState } from 'react';

const ChatInputName = ({ setNickname }) => {
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    setNickname(inputValue);
  };

  const handleOnChangeInput = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Enter Your Nickname
        <input
          type="text"
          className="text-dark"
          onChange={handleOnChangeInput}
          value={inputValue}
        />
      </label>
    </form>
  );
};

export default ChatInputName;
