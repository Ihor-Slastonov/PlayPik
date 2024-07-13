import { ninjaApi } from '../axiosConfig';

export const getNinjaFact = async () => {
  try {
    const response = await ninjaApi.get();
    if (!response) return;
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
