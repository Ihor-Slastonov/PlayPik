import { useState } from 'react';

// import Modal from '../Modal/Modal';
// import PickGameCard from './PickGameCard';
import PickGameBtn from './PickGameBtn';
// import PickGameSkeleton from './PickGameSkeleton';
// import PickGameConfirmBtn from './PickGameConfirmBtn';
// import Fact from '../Fact/Fact';

import { pickGame } from '../../utils/pickGame';

import sound from '../../assets/sound/kudasai2.mp3';

const PickGame = () => {
  const [randomGame, setRandomGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const audio = new Audio(sound);

  const pickRandomGame = () => {
    const pickedGame = pickGame(games);
    setRandomGame(pickedGame);
  };

  const handleClick = () => {
    // audio.play();
    // pickRandomGame();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <PickGameBtn handleClick={handleClick} />

      {/* <Modal
        containerId="modal_playPick"
        isOpen={isOpen}
        closeModal={handleClose}
        modalLayout={false}
      >
        <PickGameSkeleton />
        <PickGameCard handleClose={handleClose} game={randomGame} />
        <Fact />
        <PickGameConfirmBtn
          type="accept"
          close={handleClose}
          game={randomGame}
          setGames={setGames}
        />
        <PickGameConfirmBtn type="decline" close={handleClose} />
      </Modal> */}
    </>
  );
};

export default PickGame;
