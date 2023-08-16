import { io } from 'socket.io-client';

export const socket = io('https://rumahinggris.cc', {
  autoConnect: false,
  forceNew: false,
});
