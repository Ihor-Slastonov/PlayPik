const CHAT_SERVER_URL = import.meta.env.VITE_CHAT_SERVER_URL;

import { useEffect, useState } from 'react';

import axios from 'axios';

import ChatBtn from './ChatBtn';
import ChatContainer from './ChatContainer';
import ChatInputName from './ChatInputName';
import ChatOnlineList from './ChatOnlineList';
import { socketChat } from '../../services/socket';
import toast from 'react-hot-toast';
import ChatMessages from './ChatMessages';
import ChatSendMessage from './ChatSendMessage';

const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameList, setNicknameList] = useState([]);
  const [massegeList, setMassegeList] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [typingUser, setTypingUser] = useState('');

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
        socketChat.connect();
      }
    };
    connectionToServer();

    socketChat.on('userList', users => {
      setNicknameList(users);
    });

    socketChat.on('userLeft', userName => {
      toast(`${userName} has left the chat`);
    });

    socketChat.on('disconnect', () => {
      toast.error('Disconnected from server');
      setNickname('');
      setIsOpen(false);
    });

    socketChat.on('recieveMessage', messages => {
      setMassegeList(prev => [...prev, messages]);
    });

    socketChat.on('typing', user => {
      setTypingUser(user);
      setTimeout(() => setTypingUser(''), 3000);
    });

    return () => {
      socketChat.disconnect();
      socketChat.off('userList');
      socketChat.off('userLeft');
      socketChat.off('disconnect');
      socketChat.off('recieveMessage');
      socketChat.off('typing');
    };
  }, []);

  const handleToogle = () => setIsOpen(prev => !prev);

  const handleSetNameAndAddToList = name => {
    setNickname(name);
    socketChat.emit('newUser', name);
  };

  const handleSendMessage = message => {
    const messageData = { name: nickname, message };

    socketChat.emit('sendMessage', messageData);
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

            <div className="w-full flex flex-col">
              {nickname && (
                <>
                  <h2 className="text-2xl text-center mb-2">{message}</h2>
                  <ChatMessages messages={massegeList} name={nickname} />
                  {typingUser && (
                    <p className="absolute bottom-14 left-0">
                      {typingUser} is typing...
                    </p>
                  )}
                  <ChatSendMessage
                    handleSendMessage={handleSendMessage}
                    socket={socketChat}
                    nickname={nickname}
                  />
                </>
              )}
            </div>
            {nickname && (
              <ChatOnlineList
                nicknameList={nicknameList}
                typingUser={typingUser}
              />
            )}
          </>
        )}
      </ChatContainer>
    </>
  );
};

export default Chat;
