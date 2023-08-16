import { useState } from 'react';
import { useSocket } from './hooks/useSocket';

export default function App() {
  const {
    register,
    createGameRoom,
    joinRoom,
    hitButton,
    leaveRoom,
    restartGame,
    state: { id, roomID, totalPlayer, counter, winner, roomStatus },
  } = useSocket();

  const { isReady = false, roomData } = roomStatus ?? {};

  const [join, setJoin] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [inputRoom, setInputRoom] = useState('');

  const handleRegister = () => {
    register(playerName);
  };

  const handleJoinRoom = () => {
    joinRoom(inputRoom, () => {
      setJoin(false);
    });
  };

  const handleCopyClick = () => {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = roomID as string;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert(`Text copied to clipboard: ${roomID}`);
  };

  return (
    <main className="flex flex-col space-y-6 transition-all duration-300 justify-start p-10 items-center min-h-screen">
      {roomID === undefined ? (
        <div className="w-[60%]">
          <img src="/banner.webp" alt="banner" className="w-full h-full" />
        </div>
      ) : null}

      <span className="text-gray-700 font-semibold">
        {!totalPlayer
          ? 'Tidak ada pemain yang sedang online'
          : `Total pemain saat ini adalah ${totalPlayer} orang`}
      </span>

      {id === '' ? (
        <div className="flex flex-col space-y-10 w-[60%] justify-center items-center">
          <input
            type="text"
            placeholder="Masukan nama kamu"
            aria-label="nama"
            aria-describedby="basic-addon1"
            onChange={(e) => setPlayerName(e.target.value)}
            className=" bg-slate-100 w-full py-2 px-6 rounded-full text-black focus:outline-none"
          />
          <div>
            <button
              className={`bg-red-500 ${
                !playerName ? 'cursor-not-allowed' : 'cursor-pointer'
              } text-white font-bold py-2 px-6 rounded-full`}
              onClick={handleRegister}
              type="button"
              disabled={!playerName}
            >
              Register
            </button>
          </div>
        </div>
      ) : null}

      {id !== '' && roomID === undefined ? (
        <>
          <div className="flex space-x-6">
            <button
              className="text-white font-bold py-2 px-6 rounded-full bg-blue-500"
              onClick={createGameRoom}
            >
              Buat Room
            </button>
            <button
              className="text-white font-bold py-2 px-6 rounded-full bg-green-500"
              onClick={() => setJoin((prev) => !prev)}
            >
              Join Room
            </button>
          </div>
          {join ? (
            <div className="flex bg-slate-100 rounded-full overflow-hidden w-[30%]">
              <input
                type="text"
                placeholder="Masukan room id"
                aria-label=""
                aria-describedby="basic-addon1"
                className="w-full py-2 px-6 bg-transparent text-black focus:outline-none"
                onChange={(e) => setInputRoom(e.target.value)}
              />
              <button
                onClick={handleJoinRoom}
                type="button"
                className="bg-red-500 p-2 pr-4 text-white"
              >
                Mulai
              </button>
            </div>
          ) : null}
        </>
      ) : null}

      {roomID ? (
        <div className=" w-full flex flex-col space-y-24 items-center justify-center">
          <div className="flex space-x-4 justify-center items-center">
            <span>Room id: {roomID}</span>
            <button
              className="bg-gray-200 p-1 rounded-lg"
              onClick={handleCopyClick}
            >
              Salin ID
            </button>
          </div>

          {winner ? (
            <h1 className="text-4xl font-bold text-gray-600 capitalize">
              Pemenangnya adalah {winner.name}
            </h1>
          ) : null}
          <div className="w-full flex justify-between capitalize">
            <div>
              <p>Tim Biru</p>
              <p className="text-lg font-bold text-blue-600">
                {roomData?.player1?.name ?? 'Menunggu Tim'}
              </p>
            </div>
            <div>
              <p>Tim Merah</p>
              <p className="text-lg font-bold text-red-600">
                {roomData?.player2?.name ?? 'Menunggu Tim'}
              </p>
            </div>
          </div>
          <div className="flex bg-yellow-600 relative h-2 w-full items-center justify-center">
            <img
              src="flag2.png"
              alt="flag"
              className="w-14 absolute -top-12 z-10"
            />
            <div
              className="bg-white w-96 h-8 border-4 border-red-600 rounded-lg"
              style={{
                marginRight: counter * 65,
              }}
            ></div>
          </div>

          <button
            className="text-white font-bold py-6 px-12 text-4xl rounded-full bg-purple-500"
            disabled={!!winner || !isReady}
            onClick={hitButton}
          >
            Hit Me
          </button>

          <div className="flex space-x-6">
            {winner || roomData?.isAvailable === true || !roomData ? (
              <button
                className="text-white font-bold py-2 px-6 rounded-full bg-red-500"
                onClick={leaveRoom}
              >
                Leave Room
              </button>
            ) : null}
            {winner || roomData?.isAvailable === true || !roomData ? (
              <button
                className="text-white font-bold py-2 px-6 rounded-full bg-blue-500"
                onClick={restartGame}
              >
                Reset Game
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
