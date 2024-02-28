import Card from '../components/CardList/Card';
import games from '../../games.json';

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <ul className="flex items-center gap-4">
            {games.map(game => (
              <Card key={game.id} imgURL={game.imgURL} title={game.title} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
