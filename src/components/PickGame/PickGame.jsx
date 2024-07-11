import { useState } from 'react';

import Modal from '../Modal/Modal';
import { usePlayPik } from '../../utils/hooks/usePlayPik';
import PickGameCard from './PickGameCard';
import { pickGame } from '../../utils/pickGame';
import PickGameBtn from './PickGameBtn';

const PickGame = () => {
  const [randomGame, setRandomGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { games } = usePlayPik();

  const pickRandomGame = () => {
    const pickedGame = pickGame(games);
    setRandomGame(pickedGame);
  };

  const handleClick = () => {
    pickRandomGame();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
        <PickGameCard handleClose={handleClose} game={randomGame} />
      </Modal>
    </>
  );
};

export default PickGame;
