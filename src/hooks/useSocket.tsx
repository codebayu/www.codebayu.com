import { createContext, useContext, useState } from 'react';
import { io } from 'socket.io-client';

interface GameContext {
  state: ISocketState;
  register: (name: string) => void;
  createGameRoom: () => void;
  joinRoom: (roomID: string, callback: () => void) => void;
  hitButton: () => void;
  leaveRoom: () => void;
  restartGame: () => void;
}

export const SocketContext = createContext({} as GameContext);

interface ISocket {
  children: JSX.Element;
}
interface ISocketState {
  id: string;
  name: string;
  roomID?: string;
  totalPlayer: number;
  counter: number;
  winner?: Player | null;
  roomStatus?: IRoomStatus;
}

interface Player {
  id: string;
  name: string;
}

interface IRoom {
  roomID: string;
  player1?: Player;
  player2?: Player;
  isPublic: boolean;
  isAvailable: boolean;
  counter: number;
}

interface IRoomStatus {
  isReady: boolean;
  roomData: IRoom;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: ISocket) => {
  const initialState: ISocketState = {
    id: '',
    name: '',
    totalPlayer: 0,
    counter: 0,
  };
  const [state, setState] = useState(initialState);

  const socket = io('https://rumahinggris.cc', {});

  const register = (name: string) => {
    socket.emit('game:register', (id: string) => {
      setState((prev) => ({
        ...prev,
        id,
        name,
      }));
    });
  };

  const createGameRoom = () => {
    socket.emit(
      'game:create_room',
      { id: state.id, name: state.name },
      (roomID: string) => {
        setState((prev) => ({
          ...prev,
          roomID,
        }));
      }
    );
  };

  const joinRoom = async (roomID: string, callback: () => void) => {
    socket.emit(
      'game:join_room',
      { id: state.id, name: state.name, roomID },
      (err: string | null) => {
        if (err !== null) {
          return alert(err);
        }
        setState((prev) => ({
          ...prev,
          roomID,
        }));
        callback();
      }
    );
  };

  socket.on('info:total_player', (total) => {
    setState((prev) => ({
      ...prev,
      totalPlayer: total,
    }));
  });

  socket.on('game:someone_clicked', ({ counter }) => {
    setState((prev) => ({ ...prev, counter }));
  });

  socket.on('game:clear', (winner) => {
    setState((prev) => ({ ...prev, winner }));
  });

  socket.on('game:room_info', (props: IRoomStatus) => {
    setState((prev) => ({
      ...prev,
      roomStatus: props,
      counter: props.roomData.counter,
      winner: undefined,
    }));
  });

  const hitButton = () => {
    socket.emit('game:user_click', { id: state.id, roomID: state.roomID });
  };

  const leaveRoom = () => {
    socket.emit(
      'game:leave_room',
      { roomID: state.roomID, id: state.id },
      () => {
        setState((prev) => ({
          ...prev,
          roomID: undefined,
          counter: 0,
          winner: undefined,
          roomStatus: undefined,
        }));
      }
    );
  };

  const restartGame = () => {
    socket.emit(
      'game:leave_room',
      { roomID: state.roomID, id: state.id },
      () => {
        socket.emit(
          'game:join_room',
          { id: state.id, name: state.name, roomID: state.roomID },
          (err: string | null) => {
            if (err !== null) {
              return alert(err);
            }
            setState((prev) => ({
              ...prev,
              roomID: state.roomID,
            }));
          }
        );
      }
    );
  };

  return (
    <SocketContext.Provider
      value={{
        state,
        register,
        createGameRoom,
        joinRoom,
        hitButton,
        leaveRoom,
        restartGame,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
