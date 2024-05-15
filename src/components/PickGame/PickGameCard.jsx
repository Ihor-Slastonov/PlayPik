import PropTypes from 'prop-types';
import Image from '../common/Image';

const PickGameCard = ({ game }) => {
  return (
    <div
      className="w-[380px] h-[400px] bg-dark
     absolute top-20 left-1/2 -translate-x-1/2"
    >
      <div
        className="w-[220px] h-[340px] rounded-md overflow-hidden
      absolute top-1/2 left-[85px] -translate-y-1/2"
      >
        <Image imgURL={game.imgURL} alt={game.title} />
      </div>
      <div
        className="w-full h-full
    bg-[url('/border.png')] bg-[center] bg-no-repeat
    rounded-md overflow-hidden relative"
      ></div>
      <p
        className="absolute w-[400px] py-4 -left-2.5
      border border-accent rounded-md 
      shadow-center shadow-accent/70 
      text-center text-2xl font-bold"
      >
        {game.title}
      </p>
    </div>
  );
};

export default PickGameCard;

PickGameCard.propTypes = {
  game: PropTypes.object,
};
