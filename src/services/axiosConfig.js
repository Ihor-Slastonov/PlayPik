import axios from 'axios';

import { PLAYPIK_BASE_URL, IMAGE_BASE_URL } from '../utils/constans/urls';

const playpikApi = axios.create({
  baseURL: PLAYPIK_BASE_URL,
});

const imgLoadApi = axios.create({
  baseURL: IMAGE_BASE_URL,
});

export { playpikApi, imgLoadApi };
