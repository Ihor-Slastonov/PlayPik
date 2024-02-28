import games from '../../games.json';
import CardList from '../components/CardList/CardList';

const Home = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <CardList games={games} />
        </div>
      </section>
    </main>
  );
};

export default Home;
