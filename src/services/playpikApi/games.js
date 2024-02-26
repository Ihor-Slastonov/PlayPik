import { GAMES_URL } from '../../utils/constans/urls';
import { getData } from './fetchData';

/**
 * Fetch all games from the DB
 */

export const fetchGames = async () => {
  const gamesData = await getData(GAMES_URL, {});

  if (!gamesData) return null;
  return gamesData;
};
