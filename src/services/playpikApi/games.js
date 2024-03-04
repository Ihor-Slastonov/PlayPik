import { GAMES_URL } from '../../utils/constans/urls';
import { addGameValidationSchema } from '../../utils/validate/addGameSchema';
import { uploadImage } from '../imgLoadApi/uploadImage';
import { getData, postData } from './fetchData';
import * as Yup from 'yup';

/**
 * Fetch all games from the DB
 */

export const getAllGames = async () => {
  const gamesData = await getData(GAMES_URL, {});

  if (!gamesData) return null;
  return gamesData;
};

export const addGame = async (imageFile, formValues) => {
  try {
    console.log('Form values:', formValues);
    const { title, rating } = formValues; //get only fileds that we need
    console.log('Sending image file to base');
    // Send image file to store it and get image url response
    const imgURL = await uploadImage(imageFile);
    if (!imgURL) return;
    console.log(`Image file has been uploaded, imgURL:`, imgURL);

    console.log('preparing all data to send');
    // Final object to send
    const dataToSend = {
      imgURL,
      title,
      rating,
    };

    console.log('Preparing complete, game data', dataToSend);
    console.log('Start final validation before upload game');
    await addGameValidationSchema.validate(dataToSend, { abortEarly: false });

    console.log('Validation success');
    console.log('Uploading game data');

    const gameData = await postData(GAMES_URL, dataToSend, {});
    if (!gameData) return null;
    console.log('New game:', gameData);
    return gameData;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error('Validation errors:', error.errors);
    } else {
      console.error('Error:', error.message);
    }
    return error;
  }
};
