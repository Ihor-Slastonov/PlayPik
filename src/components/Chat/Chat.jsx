import { useState } from 'react';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => setIsOpen(prev => !prev);
  return (
    <>
      <ChatBtn foo={handleToogle} />
      <ChatContainer isOpen={isOpen} toogle={handleToogle}>
        {!nickname && <ChatInputName setNickname={setNickname} />}
      </ChatContainer>
    </>
  );
};

export default Chat;
