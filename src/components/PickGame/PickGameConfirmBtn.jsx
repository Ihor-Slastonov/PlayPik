/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';
import { changeGameRating } from '../../services/playpikApi/games';
import { useEffect, useState } from 'react';

const PickGameConfirmBtn = ({ type, close, game, setGames }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [-50, 50]);
  const rotateY = useTransform(x, [0, window.innerWidth], [50, -50]);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function mouseMove(e) {
      if (isHovered) {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    }

    function clearMouseMove() {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
    }

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', clearMouseMove);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', clearMouseMove);
    };
  }, [isHovered, x, y]);

  const handleClick = async () => {
    if (type !== 'accept') return close();

    const updatedGames = await changeGameRating(game.id, game.rating);
    setGames(updatedGames);
    close();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 4.7, ease: 'easeInOut' }}
      className={clsx(
        'absolute flex items-center justify-center w-[600px] h-[500px] cursor-pointer',
        type === 'accept' ? 'top-[8%] left-[8%]' : 'top-[8%] right-[8%]'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="size-40 p-2 bg-white rounded-full">
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
