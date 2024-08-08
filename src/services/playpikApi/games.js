import toast from 'react-hot-toast';
import { GAMES_URL } from '../../utils/constans/urls';
import { addGameValidationSchema } from '../../utils/validate/addGameSchema';
import { uploadImage } from '../imgLoadApi/uploadImage';
import { deleteData, getData, postData, putData } from './fetchData';
import * as Yup from 'yup';
import { GAMES_KEY, LAST_GAME_KEY } from '../../utils/constans/storageKeys';
import {
  deleteFromStoreData,
  setLocalStorageData,
  updateStoreDataItemValue,
  updateStoredData,
  getLocalStorageData,
} from '../../utils/storage';

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
    let imgURL;
    let delete_imgURL;
    const { title, rating, category, type } = formValues; //get only fileds that we need

    //Check if no image then will set the default image.
    //  Send image file to store it and get image url response
    if (imageFile === null || imageFile === 'no image') {
      imgURL = 'no image';
      delete_imgURL = '';
    } else {
      const newImage = await uploadImage(imageFile);
      if (!newImage) return;
      imgURL = newImage.imgURL;
      delete_imgURL = newImage.delete_imgURL;
    }

    const dataToSend = {
      imgURL,
      title,
      rating,
      category,
      type,
      delete_imgURL,
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
  const newGame = await addGame(imageFile, formValues);
  if (!newGame) return;
  const updatedData = updateStoredData(GAMES_KEY, newGame);
  return updatedData;
};

// Delete game and update storage

export const deleteGame = async id => {
  const request = await deleteData(`${GAMES_URL}/${id}`);
  if (!request) return toast.error('Server error');

  const storeData = deleteFromStoreData(GAMES_KEY, id);
  toast.success('Game has been deleted');
  return storeData;
};

// Change game rating and update storage

export const changeGameRating = async (id, rating) => {
  const newRating = rating + 1;

  const response = await putData(`${GAMES_URL}/${id}`, { rating: newRating });
  if (!response) return toast.error('Error updating');
  toast.success(`Success. Prev rating: ${rating}. New rating: ${newRating}`);

  return updateStoreDataItemValue(GAMES_KEY, id, 'rating', newRating);
};

// Change favorite field

export const changeGameFavoriteField = async (id, favorite) => {
  const favoriteField = !favorite;
  const response = await putData(`${GAMES_URL}/${id}`, {
    favorite: favoriteField,
  });
  if (!response) return toast.error('Error updating');
  toast.success('Success');
  updateStoreDataItemValue(GAMES_KEY, id, 'favorite', favoriteField);
  return favoriteField;
};

// Set game to localStorage

export const saveLastPickedGame = game => {
  setLocalStorageData(LAST_GAME_KEY, game);
};

export const getLastPickedGame = () => {
  return getLocalStorageData(LAST_GAME_KEY);
};