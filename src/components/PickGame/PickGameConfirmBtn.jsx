/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { motion, useMotionValue } from 'framer-motion';

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';

import { changeGameRating } from '../../services/playpikApi/games';
import useMeasure from 'react-use-measure';

const PickGameConfirmBtn = ({ type, close, game, setGames }) => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = async () => {
    if (type !== 'accept') return close();
    await changeGameRating(game.id, game.rating)
    // const updatedGames = await changeGameRating(game.id, game.rating);
    // setGames(updatedGames);
    close();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, pointerEvents: 'none' }}
      animate={{ opacity: 1, pointerEvents: 'all' }}
      transition={{ duration: 0.5, delay: 5 }}
      className={clsx(
        'absolute flex items-center justify-center w-[600px] h-[500px] cursor-pointer group',
        type === 'accept' ? 'top-[8%] left-[8%]' : 'top-[8%] right-[8%]'
      )}
      onClick={handleClick}
      onHoverStart={() => {
        resetMousePosition();
      }}
      onHoverEnd={() => {
        resetMousePosition();
      }}
      onPointerMove={e => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 0.2);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 0.2);
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-8"
        style={{ rotateX: mouseX, rotateY: mouseY }}
      >
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
      </motion.div>
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
