import { useState } from 'react';
import games from '../../games.json';
import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => setIsOpen(prev => !prev);

  return (
    <main>
      <section className="section">
        <div className="container">
          <CardList games={games} toogleModal={toogleModal} />
          <Modal isOpen={isOpen} closeModal={toogleModal} />
        </div>
      </section>
    </main>
  );
};

export default Home;
