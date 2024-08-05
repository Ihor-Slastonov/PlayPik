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
    <form
      onSubmit={onFormSubmit}
      className="min-w-[200px] p-2 absolute top-8 left-1/2 -translate-x-1/2
      border border-accent_green rounded-lg"
    >
      <label className="mb-1">
        Enter Your Nickname
        <input
          type="text"
          className="text-dark w-full px-1 text-2xl"
          onChange={handleOnChangeInput}
          value={inputValue}
        />
      </label>
      <div
        className="w-full h-6 absolute -bottom-[30px] left-0 
       bg-accent_green rounded-md blur-sm"
      ></div>
      <p className="absolute rotate-180 -scale-x-100 text-2xl blur-[1px] top-[74px] left-3 text-accent ">
        {inputValue}
      </p>
    </form>
  );
};

export default ChatInputName;

ChatInputName.propTypes = {
  setNickname: PropTypes.func,
};
