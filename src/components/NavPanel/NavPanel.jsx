import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLastPickedGame } from '../../services/playpikApi/games';

const NavPanel = () => {
  const [lastGame, setLastGame] = useState({});
  const location = useLocation();

  const linkText = location.pathname === '/' ? 'Classic' : 'Tournament';

  useEffect(() => {
    // Получаем последнюю игру из localStorage
    const game = getLastPickedGame();
    setLastGame(game);
  }, [location.pathname]); // Устанавливаем lastGame при изменении pathname

  return (
    <div className="w-full absolute top-0 left-0 flex items-center justify-between pointer-events-none">
      <nav className="flex items-center gap-2 pointer-events-auto">
        mode:
        <Link
          to={location.pathname === '/' ? '/tournament' : '/'}
          className="p-2 rounded-lg border border-accent 
                hover:text-accent hover:border-accent_green duration-500 ease-in-out"
        >
          {linkText}
        </Link>
      </nav>

      <p className="flex items-center gap-2">
        last game: <span>{lastGame ? lastGame.title : 'no game'}</span>
      </p>
    </div>
  );
};

export default NavPanel;
