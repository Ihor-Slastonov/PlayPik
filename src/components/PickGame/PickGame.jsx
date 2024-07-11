import { useState } from 'react';

import useCountdownTimer from '../../utils/hooks/useCountdownTimer';

import Modal from '../Modal/Modal';
import { usePlayPik } from '../../utils/hooks/usePlayPik';
import PickGameCard from './PickGameCard';
import { pickGame } from '../../utils/pickGame';
import PickGameBtn from './PickGameBtn';

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
      <PickGameBtn handleClick={handleClick} />

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
