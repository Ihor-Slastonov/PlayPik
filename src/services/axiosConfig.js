import axios from 'axios';

import { PLAYPIK_BASE_URL } from '../utils/constans/urls';

const playpikApi = axios.create({
  baseURL: PLAYPIK_BASE_URL,
});

export { playpikApi };
