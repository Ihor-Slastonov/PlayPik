const TOURNAMENT_URL = import.meta.env.VITE_TOURNAMENT_URL;

import { useEffect, useState } from 'react';
import TournamentInputName from '../components/Tournament/TournamentInputName';
import { socketTournament } from '../services/socket';
import axios from 'axios';
import TournamentList from '../components/Tournament/TournamentList';

const TournamentPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newUserName, setNewUserName] = useState({});
  const [onlineList, setOnlineList] = useState([]);

  useEffect(() => {
    const getAccess = async () => {
      try {
        setIsLoading(true);
        const isAccess = await axios.get(TOURNAMENT_URL);
        if (!isAccess) return;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        socketTournament.connect();
      }
    };
    getAccess();

    socketTournament.on('newUser', user => {
      setNewUserName(user);
    });

    socketTournament.on('userList', users => {
      setOnlineList(users);
    });

    socketTournament.on('disconnect', () => {
      setIsLoading(true);
      setNewUserName({});
      setOnlineList([]);
    });
    return () => {
      socketTournament.disconnect();
      socketTournament.off('userTor');
    };
  }, []);

  const handleRegisterUser = user => {
    socketTournament.emit('newUser', user);
  };

  return (
    <main>
      <section className="py-10">
        <div className="container">
          <h1 className="text-4xl text-center mb-4">
            Welocome
            <span className="text-accent_green mx-1 capitalize">
              {Object.keys(newUserName).length !== 0 && newUserName.userName}
            </span>
            To Tournament Mode
          </h1>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {Object.keys(newUserName).length === 0 ? (
                <>
                  <p className="text-center text-xl">
                    Please enter you name and press &apos;connect&apos;
                  </p>

                  <TournamentInputName setNewUserName={handleRegisterUser} />
                </>
              ) : (
                <>
                  <TournamentList onlineList={onlineList} />
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default TournamentPage;
