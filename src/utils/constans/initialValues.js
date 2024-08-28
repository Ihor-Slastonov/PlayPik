import { gameCategories, gameTypes } from './gameValuse';

export const addGameFormInitialValues = {
  title: '',
  imgURL: '',
  rating: 0,
  file: '',
  category: gameCategories ? gameCategories[0] : '',
  type: gameTypes ? gameTypes[1] : '',
};

export const authInitialState = {
  id: '',
  role: '',
  token: '',
  name: '',
  email: '',
  imageURL: '',
};
