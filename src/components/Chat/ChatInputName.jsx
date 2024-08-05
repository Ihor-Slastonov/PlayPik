import { useState } from 'react';

import PropTypes from 'prop-types';

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

ChatInputName.propTypes = {
  setNickname: PropTypes.func,
};
