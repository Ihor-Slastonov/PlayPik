import PropTypes from 'prop-types';

import Card from './Card';
import AddCardBtn from './AddCardBtn';

const CardList = ({ games }) => {
  return (
    <ul className="flex flex-wrap items-center gap-4">
      {games?.map(game => (
        <Card key={game.id} imgURL={game.imgURL} title={game.title} />
      ))}

      <AddCardBtn />
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  games: PropTypes.array.isRequired,
};
