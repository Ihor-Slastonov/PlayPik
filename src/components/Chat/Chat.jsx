import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';
import ChatOnlineList from './ChatOnlineList';
import axios from 'axios';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameList, setNicknameList] = useState([]);

  const [message, setMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const connectionToServer = async () => {
      try {
        const res = await axios.get('https://playpickchat.onrender.com');
        if (!res) return;
        setMessage(res.data.message);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    };

    connectionToServer();
  }, []);

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
        {!isLoaded ? (
          <p>Loading...</p>
        ) : (
          <>
            {!nickname && (
              <ChatInputName setNickname={handleSetNameAndAddToList} />
            )}
            <div className="w-full h-full flex border-accent_red">
              <div className="w-full">
                {nickname && (
                  <h2 className="text-2xl text-center mb-2">{message}</h2>
                )}
              </div>
              {nickname && <ChatOnlineList nicknameList={nicknameList} />}
            </div>
          </>
        )}
      </ChatContainer>
    </>
  );
};

export default Chat;
