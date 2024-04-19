import { useState } from 'react';

import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/24/solid';
import Modal from '../Modal/Modal';
import { deleteGame } from '../../services/playpikApi/games';
import { usePlayPik } from '../../utils/hooks/usePlayPik';

const DeleteCardBtn = ({ id, title, delete_imgURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSecondStep, setIsSecondStep] = useState(false);
  const [isDeleteImg, setIsDeleteImg] = useState(false);
  const { setGames } = usePlayPik();

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    setIsFirstStep(true);
    setIsSecondStep(false);
  };
  const handleSecondStep = () => {
    setIsFirstStep(prev => !prev);
    setIsSecondStep(prev => !prev);
  };

  const handleGameDeleteBtn = async id => {
    const newData = await deleteGame(id);
    if (!newData) return;
    setGames(newData);
    handleToggle();
  };

  return (
    <>
      <button
        onClick={handleToggle}
        type="button"
        className="card__deleteBtn
      pointer-events-none group-hover:pointer-events-auto
      opacity-0 group-hover:opacity-100"
      >
        <TrashIcon className="w-6 h-6" />
      </button>

      <Modal
        containerId="delete_game"
        isOpen={isOpen}
        closeModal={handleToggle}
        modalLayout={true}
      >
        {isFirstStep && (
          <>
            <p className="mb-2 text-lg">
              Do you realy want to delete this {title} game?
            </p>

            <div className="flex items-center justify-between">
              <button
                className="p-4 border text-xl font-bold uppercase
            hover:border-accent_green hover:text-accent_green duration-500 ease-in-out"
                type="button"
                title="Click it if you not ODUDENKO)"
                onClick={handleSecondStep}
              >
                yes
              </button>
              <button
                onClick={handleToggle}
                className="p-4 border text-xl font-bold uppercase
             hover:border-accent_red hover:text-accent_red duration-500 ease-in-out "
                type="button"
              >
                no
              </button>
            </div>
          </>
        )}
        {isSecondStep && (
          <>
            <p className="text-xl mb-2">Please follow this steps:</p>
            <ol className="list-decimal text-sm text-light flex flex-col gap-1 ml-4 mb-8">
              <li>Click delete image button</li>
              <li>You will be redirected to website in a new tab</li>
              <li>You need to find red delete button. Click it!</li>
              <li>Come back to Plapick page and press Delete game button</li>
            </ol>

            <div className="flex items-center justify-between">
              <a
                href={delete_imgURL}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-block p-4 border text-xl font-bold uppercase
                hover:border-accent_red hover:text-accent_red duration-500 ease-in-out"
                onClick={() => setIsDeleteImg(true)}
              >
                Delete Image
              </a>
              <button
                type="button"
                className="p-4 border text-xl font-bold uppercase
                hover:border-accent_red hover:text-accent_red
                disabled:border-semi-dark disabled:text-semi-dark duration-500 ease-in-out"
                disabled={!isDeleteImg}
                onClick={() => handleGameDeleteBtn(id)}
              >
                delete game
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default DeleteCardBtn;

DeleteCardBtn.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  delete_imgURL: PropTypes.string.isRequired,
};
