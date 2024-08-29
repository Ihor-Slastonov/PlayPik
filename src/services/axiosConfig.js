import axios from 'axios';

import { IMAGE_BASE_URL, FACTS_URL } from '../utils/constans/urls';

const { VITE_API_SERVER_BASE_URL, VITE_NINJA_API_KEY } = import.meta.env;

const playpikApi = axios.create({
  baseURL: VITE_API_SERVER_BASE_URL,
});

const imgLoadApi = axios.create({
  baseURL: IMAGE_BASE_URL,
});

const ninjaApi = axios.create({
  baseURL: FACTS_URL,
  headers: { 'X-Api-Key': VITE_NINJA_API_KEY },
});

export { playpikApi, imgLoadApi, ninjaApi };
