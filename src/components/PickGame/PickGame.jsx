import { useState } from 'react';

import Modal from '../Modal/Modal';
import PickGameCard from './PickGameCard';
import PickGameBtn from './PickGameBtn';
import PickGameSkeleton from './PickGameSkeleton';

import { usePlayPik } from '../../utils/hooks/usePlayPik';
import { pickGame } from '../../utils/pickGame';

import sound from '../../assets/sound/kudasai2.mp3';

const PickGame = () => {
  const [randomGame, setRandomGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { games } = usePlayPik();

  const audio = new Audio(sound);

  const pickRandomGame = () => {
    const pickedGame = pickGame(games);
    setRandomGame(pickedGame);
  };

  const handleClick = () => {
    audio.play();
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
        <PickGameSkeleton />
        <PickGameCard handleClose={handleClose} game={randomGame} />
      </Modal>
    </>
  );
};

export default PickGame;
