import PropTypes from 'prop-types';
import Image from '../common/Image';

const TournamentPickedGames = ({ gamesInOrder, chosenGame }) => {
  return (
    <>
      <h2 className="text-3xl text-center text-accent mb-6">Games In Order</h2>
      {!chosenGame || Object.keys(chosenGame).length === 0 ? (
        <ul className="w-full min-h-[300px] flex center gap-16">
          {gamesInOrder?.map((game, index) => (
            <li key={index} className="card__container">
              <Image imgURL={game.imgURL} alt="title" />
              <p className="card__title">{game.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full min-h-[300px] flex center">
          <div className="card__container">
            <Image imgURL={chosenGame.imgURL} alt="title" />
            <p className="card__title">{chosenGame.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TournamentPickedGames;

TournamentPickedGames.propTypes = {
  gamesInOrder: PropTypes.array,
  chosenGame: PropTypes.object,
};
