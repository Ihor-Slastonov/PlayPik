import { useState } from 'react';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => setIsOpen(prev => !prev);
  return (
    <>
      <ChatBtn foo={handleToogle} />
      <ChatContainer isOpen={isOpen} toogle={handleToogle}></ChatContainer>
    </>
  );
};

export default Chat;
