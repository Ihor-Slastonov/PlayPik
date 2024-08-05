const CHAT_SERVER_URL = import.meta.env.VITE_CHAT_SERVER_URL;

import { io } from 'socket.io-client';

export const socket = io(CHAT_SERVER_URL, {
  autoConnect: false,
});
