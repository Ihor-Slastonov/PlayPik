import toast from 'react-hot-toast';
import { getLastPickedGame } from '../../../services/playpikApi/games';
import { socketTournament } from '../../../services/socket';

const PickGameTournament = () => {
  const handleReady = () => {
    const savedGame = getLastPickedGame();
    if (!savedGame) return toast.error('Try again');
    socketTournament.emit('userReady', savedGame);
  };

  return (
    <button
      type="button"
      onClick={handleReady}
      className="w-52 h-20 block mx-auto rounded-md border border-accent_green
                hover:-translate-y-1 duration-500 hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.75)]
                active:-translate-y-[2px] outline-none pointer-events-auto"
    >
      Ready
    </button>
  );
};

export default PickGameTournament;
