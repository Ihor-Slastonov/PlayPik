const CHAT_SERVER_URL = import.meta.env.VITE_CHAT_SERVER_URL;

import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import axios from 'axios';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';
import ChatOnlineList from './ChatOnlineList';
import { socket } from '../../services/socket';
import toast from 'react-hot-toast';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameList, setNicknameList] = useState([]);
  // const [massegeList, setMassegeList] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [newSocket, setNewSocket] = useState(null);

  useEffect(() => {
    const connectionToServer = async () => {
      try {
        const res = await axios.get(CHAT_SERVER_URL);
        if (!res) return;
        setMessage(res.data.message);
      } catch (error) {
        console.log(error);
        toast.error('Error connection');
      } finally {
        setIsLoaded(true);
        socket.connect();
      }
    };
    connectionToServer();
    socket.on('connection', events => {
      console.log(events);
    });
    socket.on('userList', users => {
      setNicknameList(users);
    });

    return () => {
      socket.disconnect();
      socket.off('connection');
    };
  }, []);

  const handleToogle = () => setIsOpen(prev => !prev);

  const handleSetNameAndAddToList = name => {
    setNickname(name);
    const newUser = {
      id: nanoid(),
      name: name,
    };

    socket.emit('newUser', newUser);
  };

  return (
    <>
      <ChatBtn foo={handleToogle} />
      <ChatContainer isOpen={isOpen} toogle={handleToogle}>
        {!isLoaded ? (
          <p className="absolute position_center animate-pulse text-2xl">
            Loading...
          </p>
        ) : (
          <>
            {!nickname && (
              <ChatInputName setNickname={handleSetNameAndAddToList} />
            )}

            <div className="w-full">
              {nickname && (
                <h2 className="text-2xl text-center mb-2">{message}</h2>
              )}
            </div>
            {nickname && <ChatOnlineList nicknameList={nicknameList} />}
          </>
        )}
      </ChatContainer>
    </>
  );
};

export default Chat;
