const SERVER_URL = import.meta.env.VITE_SERVER_URL;

import { io } from 'socket.io-client';

export const socketChat = io(`${SERVER_URL}/chat`, {
  reconnection: false,
});

export const socketTournament = io(`${SERVER_URL}/tournament`, {
  reconnection: false,
});
