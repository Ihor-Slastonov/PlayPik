import PropTypes from 'prop-types';
import { useState } from 'react';

const TournamentInputName = ({ setNewUserName }) => {
  const [inputField, setInputField] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setNewUserName(inputField.trim());
    setInputField('');
  };

  return (
    <form className="w-[200px] p-2" onSubmit={handleSubmit}>
      <input
        className="w-full p-2 text-dark"
        type="text"
        placeholder="Enter your name"
        value={inputField}
        onChange={e => setInputField(e.target.value)}
      />
    </form>
  );
};

export default TournamentInputName;

TournamentInputName.propTypes = {
  setNewUserName: PropTypes.func,
};
