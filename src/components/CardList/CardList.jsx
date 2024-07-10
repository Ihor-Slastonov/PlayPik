import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Card from './Card';
import AddCardBtn from './AddCardBtn';
import CardListSkeleton from './CardListSkeleton';

const CardList = ({ games, toogleModal }) => {
  const [isAllImgsLoaded, setIsAllImgsLoaded] = useState(false);
  const [imageLoadedCounter, setImageLoadedCounter] = useState(0);

  const imageCounter = () => setImageLoadedCounter(prev => prev + 1);

  useEffect(() => {
    if (games.length === imageLoadedCounter) {
      setIsAllImgsLoaded(true);
    }
  }, [games.length, imageLoadedCounter]);

  return (
    <>
      {!isAllImgsLoaded && <CardListSkeleton />}
      <AnimatePresence>
        {isAllImgsLoaded && (
          <motion.ul
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.2 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="flex flex-wrap items-center gap-4 "
          >
            {games?.map(game => (
              <Card
                key={game.id}
                id={game.id}
                imgURL={game.imgURL}
                title={game.title}
                category={game.category}
                delete_imgURL={game.delete_imgURL}
                type={game.type}
                imageCounter={imageCounter}
              />
            ))}

            <AddCardBtn toogleModal={toogleModal} />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  games: PropTypes.array.isRequired,
  toogleModal: PropTypes.func,
};
