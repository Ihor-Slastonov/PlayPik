import { GAMES_URL } from '../../utils/constans/urls';
import { getData, postData } from './fetchData';

/**
 * Fetch all games from the DB
 */

export const getAllGames = async () => {
  const gamesData = await getData(GAMES_URL, {});

  if (!gamesData) return null;
  return gamesData;
};

export const addGame = async data => {
  const gameData = await postData(GAMES_URL, data, {});
  if (!gameData) return null;
  return gameData;
};
