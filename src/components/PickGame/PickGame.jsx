import { useState } from 'react';

import useCountdownTimer from '../../utils/hooks/useCountdownTimer';

import Modal from '../Modal/Modal';
import { usePlayPik } from '../../utils/hooks/usePlayPik';
import PickGameCard from './PickGameCard';
import { pickGame } from '../../utils/pickGame';

const PickGame = () => {
  const [randomGame, setRandomGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { startTimer, resetTimer, countdown } = useCountdownTimer(3, 1000);
  const { games } = usePlayPik();

  const pickRandomGame = () => {
    const pickedGame = pickGame(games);
    setRandomGame(pickedGame);
  };

  const handleClick = () => {
    pickRandomGame();
    setIsOpen(true);
    startTimer();
  };

  const handleClose = () => {
    setIsOpen(false);
    resetTimer();
  };

  return (
    <>
      {/* <div className="pb-5 pt-5  sticky top-0 z-10 bg-dark"> */}
      <button
        type="button"
        className="w-52 h-20 block mx-auto  rounded-md
                bg-[url('/button.webp')] bg-cover bg-no-repeat bg-center
                hover:-translate-y-1 duration-500 hover:shadow-[0px_6px_6px_0px_rgba(0,0,0,0.75)]
                active:-translate-y-[2px] outline-none"
        onClick={handleClick}
      ></button>
      {/* </div> */}

      <Modal
        containerId="modal_playPick"
        isOpen={isOpen}
        closeModal={handleClose}
        modalLayout={false}
      >
        <PickGameCard
          handleClose={handleClose}
          game={randomGame}
          countdown={countdown}
        />
      </Modal>
    </>
  );
};

export default PickGame;
