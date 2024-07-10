import PropTypes from 'prop-types';

import Card from './Card';
import AddCardBtn from './AddCardBtn';
import { useEffect, useState } from 'react';
import CardListSkeleton from './CardListSkeleton';

const CardList = ({ games, toogleModal }) => {
  const [isAllImgsLoaded, setIsAllImgsLoaded] = useState(false);
  const [imageLoadedCounter, setImageLoadedCounter] = useState(0);

  const imageCounter = () => setImageLoadedCounter(prev => prev + 1);

  useEffect(() => {
    if (games.length === imageLoadedCounter) {
      setIsAllImgsLoaded(true);
    }
  }, [games, imageLoadedCounter]);

  return (
    <>
      {!isAllImgsLoaded ? (
        <CardListSkeleton />
      ) : (
        <ul className="flex flex-wrap items-center gap-4">
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
        </ul>
      )}
    </>
  );
};

export default CardList;

CardList.propTypes = {
  games: PropTypes.array.isRequired,
  toogleModal: PropTypes.func,
};
