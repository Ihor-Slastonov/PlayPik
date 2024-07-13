import axios from 'axios';

import {
  PLAYPIK_BASE_URL,
  IMAGE_BASE_URL,
  FACTS_URL,
} from '../utils/constans/urls';

const NINJA_API_KEY = import.meta.env.VITE_NINJA_API_KEY;

const playpikApi = axios.create({
  baseURL: PLAYPIK_BASE_URL,
});

const imgLoadApi = axios.create({
  baseURL: IMAGE_BASE_URL,
});

const ninjaApi = axios.create({
  baseURL: FACTS_URL,
  headers: { 'X-Api-Key': NINJA_API_KEY },
});

export { playpikApi, imgLoadApi, ninjaApi };
