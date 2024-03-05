import { useState } from 'react';
import games from '../../games.json';
import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import AddGame from '../components/AddGame/AddGame';
import PickGame from '../components/PickGame/PickGame';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => setIsOpen(prev => !prev);

  return (
    <main>
      <section className="section">
        <div className="container">
          <PickGame />
          <CardList games={games} toogleModal={toogleModal} />
          <Modal
            containerId="modal_addGameForm"
            isOpen={isOpen}
            closeModal={toogleModal}
          >
            <AddGame />
          </Modal>
        </div>
      </section>
    </main>
  );
};

export default Home;
