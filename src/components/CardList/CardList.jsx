import PropTypes from 'prop-types';

import Card from './Card';
import AddCardBtn from './AddCardBtn';

const CardList = ({ games, toogleModal }) => {
  return (
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
        />
      ))}

      <AddCardBtn toogleModal={toogleModal} />
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  games: PropTypes.array.isRequired,
  toogleModal: PropTypes.func,
};
