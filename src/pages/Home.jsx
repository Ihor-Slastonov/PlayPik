import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { getAllGames } from '../services/playpikApi/games';
import { usePlayPik } from '../utils/hooks/usePlayPik';

import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import AddGame from '../components/AddGame/AddGame';
import PickGame from '../components/PickGame/PickGame';
import FilterBar from '../components/FilterBar/FilterBar';
import ReloadDataBtn from '../components/ReloadDataBtn/ReloadDataBtn';
import Chat from '../components/Chat/Chat';

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
      <header className="py-5 sticky top-0 z-10 bg-dark border-b shadow-md shadow-semi-dark">
        <div className="container">
          <div className="flex flex-col gap-4">
            <PickGame />
            <FilterBar />
          </div>
        </div>
      </header>
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
      <div
        className="flex flex-col gap-2
      fixed bottom-[40px] right-[80px]"
      >
        <Chat />
        <ReloadDataBtn />
      </div>
    </>
  );
};

export default Home;
