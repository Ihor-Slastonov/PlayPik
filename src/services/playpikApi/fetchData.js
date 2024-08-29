import { playpikApi } from '../axiosConfig';

export const getData = async (url, params) => {
  try {
    const response = await playpikApi.get(url, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  }
};

export const postData = async (url, data, params) => {
  try {
    const response = await playpikApi.post(url, data, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  }
};

export const putData = async (url, data, params) => {
  try {
    const response = await playpikApi.put(url, data, params);
    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  }
};

export const deleteData = async (url, params) => {
  try {
    const response = await playpikApi.delete(url, { params });
    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  }
};
