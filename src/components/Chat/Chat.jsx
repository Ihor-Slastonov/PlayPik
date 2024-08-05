import { useState } from 'react';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';
import { nanoid } from 'nanoid';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameList, setNicknameList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => setIsOpen(prev => !prev);
  const handleSetNameAndAddToList = name => {
    setNickname(name);
    setNicknameList(...nicknameList, {
      nick: name,
      id: nanoid(),
    });
  };

  return (
    <>
      <ChatBtn foo={handleToogle} />
      <ChatContainer isOpen={isOpen} toogle={handleToogle}>
        {!nickname && <ChatInputName setNickname={handleSetNameAndAddToList} />}
      </ChatContainer>
    </>
  );
};

export default Chat;
