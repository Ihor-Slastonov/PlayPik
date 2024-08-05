import { useState } from 'react';
import { nanoid } from 'nanoid';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';
import ChatOnlineList from './ChatOnlineList';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameList, setNicknameList] = useState([
    { nick: 'Jam', id: '2312312' },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => setIsOpen(prev => !prev);
  const handleSetNameAndAddToList = name => {
    setNickname(name);
    setNicknameList(prev => [
      ...prev,
      {
        nick: name,
        id: nanoid(),
      },
    ]);
  };

  return (
    <>
      <ChatBtn foo={handleToogle} />
      <ChatContainer isOpen={isOpen} toogle={handleToogle}>
        {!nickname && <ChatInputName setNickname={handleSetNameAndAddToList} />}
        {nickname && <ChatOnlineList nicknameList={nicknameList} />}
      </ChatContainer>
    </>
  );
};

export default Chat;
