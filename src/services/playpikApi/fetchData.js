import { playpikApi } from '../axiosConfig';

// Utility to add JWT
const setAuthHeader = token => {
  playpikApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  playpikApi.defaults.headers.common.Authorization = '';
};

export const getData = async (url, params) => {
  try {
    const response = await playpikApi.get(url, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  }
};

export const postData = async (url, data, params, token = null) => {
  try {
    // Set the Authorization header if a token is provided
    if (token) {
      setAuthHeader(token);
    }
    const response = await playpikApi.post(url, data, { params });

    return response?.data;
  } catch (error) {
    const message = error?.response?.data.message;
    throw new Error(message || 'Bad request');
  } finally {
    // Clear the Authorization header after the request
    clearAuthHeader();
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
