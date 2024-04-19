import { playpikApi } from '../axiosConfig';

export const getData = async (url, params) => {
  try {
    const response = await playpikApi.get(url, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data
      ? error.response.message
      : error.message;

    console.error(`Error fetching data to ${url}:`, message);
    return error;
  }
};

export const postData = async (url, data, params) => {
  try {
    const response = await playpikApi.post(url, data, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data
      ? error.response.message
      : error.message;

    console.error(`Error fetching data to ${url}:`, message);
    return error;
  }
};

export const deleteData = async (url, params) => {
  try {
    const response = await playpikApi.delete(url, { params });
    return response?.data;
  } catch (error) {
    console.error('Error fetching data');
  }
};
