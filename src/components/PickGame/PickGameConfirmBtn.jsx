/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';

import { changeGameRating } from '../../services/playpikApi/games';

const PickGameConfirmBtn = ({ type, close, game, setGames }) => {
  const handleClick = async () => {
    if (type !== 'accept') return close();

    const updatedGames = await changeGameRating(game.id, game.rating);
    setGames(updatedGames);
    close();
  };

  return (
    <motion.div
      initial={{ opacity: 0, pointerEvents: 'none' }}
      animate={{ opacity: 1, pointerEvents: 'all' }}
      transition={{ duration: 0.5, delay: 5 }}
      className={clsx(
        'absolute flex items-center justify-center w-[600px] h-[500px] cursor-pointer group',
        type === 'accept' ? 'top-[8%] left-[8%]' : 'top-[8%] right-[8%]'
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="size-40 p-2 bg-white rounded-full group-hover:animate-bounce">
          <div
            className={clsx(
              'size-full flex justify-center items-center rounded-full',
              type === 'accept' ? 'bg-accent_green' : 'bg-accent_red'
            )}
          >
            {type === 'accept' ? (
              <HandThumbUpIcon className="size-32" />
            ) : (
              <HandThumbDownIcon className="size-32" />
            )}
          </div>
        </div>
        {type === 'accept' ? (
          <p className="font-bold text-5xl">YES, I'AM A HERO</p>
        ) : (
          <p className="font-bold text-5xl">YES, I LOVE BIG DICKS</p>
        )}
      </div>
    </motion.div>
  );
};

export default PickGameConfirmBtn;

PickGameConfirmBtn.propTypes = {
  type: PropTypes.oneOf(['accept', 'decline']).isRequired,
  close: PropTypes.func.isRequired,
  game: PropTypes.object,
  setGames: PropTypes.func,
};
