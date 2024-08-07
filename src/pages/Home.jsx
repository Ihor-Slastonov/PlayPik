import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { getAllGames } from '../services/playpikApi/games';
import { usePlayPik } from '../utils/hooks/usePlayPik';

import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import AddGame from '../components/AddGame/AddGame';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { games, setGames } = usePlayPik();

  useEffect(() => {
    async function getGamesData() {
      try {
        const gamesData = await getAllGames();
        if (!gamesData) return setGames([]);

        setGames(gamesData);
      } catch (error) {
        toast.error('Fail to load data');
      }
    }

    getGamesData();
  }, [setGames]);

  const toogleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <main>
        <section className="section">
          <div className="container">
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
    </>
  );
};

export default Home;
