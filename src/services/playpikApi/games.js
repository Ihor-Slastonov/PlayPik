import toast from 'react-hot-toast';
import { GAMES_URL } from '../../utils/constans/urls';
import { addGameValidationSchema } from '../../utils/validate/addGameSchema';
import { uploadImage } from '../imgLoadApi/uploadImage';
import { getData, postData } from './fetchData';
import * as Yup from 'yup';
import { GAMES_KEY } from '../../utils/constans/storageKeys';
import { updateStoredData } from '../../utils/storage';

/**
 * Fetch all games from the DB
 */

export const fetchAllGames = async () => {
  const gamesData = await getData(GAMES_URL, {});

  if (!gamesData) return null;
  return gamesData;
};

export const getAllGames = async () => {
  // check if games stored in sessionStorage

  const storedGames = sessionStorage.getItem(GAMES_KEY, {});
  // if there stored data return it
  if (storedGames) {
    toast('data loaded from sessionStorage');
    return JSON.parse(storedGames);
  }
  // otherwise fetch all games and stored it

  const gamesData = await fetchAllGames();

  if (gamesData) {
    sessionStorage.setItem(GAMES_KEY, JSON.stringify(gamesData));
  }

  toast('data loaded from server');

  return gamesData;
};

// Add new game to DB
export const addGame = async (imageFile, formValues) => {
  try {
    const { title, rating } = formValues; //get only fileds that we need

    // Send image file to store it and get image url response
    const imgURL = await uploadImage(imageFile);
    if (!imgURL) return;

    const dataToSend = {
      imgURL,
      title,
      rating,
    };

    await addGameValidationSchema.validate(dataToSend, { abortEarly: false });

    const gameData = await postData(GAMES_URL, dataToSend, {});
    if (!gameData) return null;

    return gameData;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error('Validation errors:', error.errors);
    } else {
      console.error('Error:', error.message);
    }
    toast.error('Faild =( Try again later');
    return error;
  } finally {
    toast.success('Game added successfully');
  }
};

export const addGameAndUpdateLocalGames = async (imageFile, formValues) => {
  // add new game to data base
  const newGame = await addGame(imageFile, formValues);
  if (!newGame) return;
  const updatedData = updateStoredData(GAMES_KEY, newGame);
  return updatedData;
};
