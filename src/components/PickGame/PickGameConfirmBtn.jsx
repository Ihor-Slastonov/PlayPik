import PropTypes from 'prop-types';
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 4.7, ease: 'easeInOut' }}
      className={clsx(
        'absolute size-40 p-2 bg-white rounded-full ',
        type === 'accept' ? 'top-[15%] left-[20%]' : 'top-[15%] right-[20%]'
      )}
      style={{ perspective: 1000 }}
      onClick={handleClick}
    >
      <div
        className={clsx(
          'size-full flex justify-center items-center rounded-full duration-500 ease-in-out cursor-pointer',
          type === 'accept' ? 'bg-accent_green' : 'bg-accent_red'
        )}
      >
        {type === 'accept' ? (
          <HandThumbUpIcon className="size-32" />
        ) : (
          <HandThumbDownIcon className="size-32" />
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
