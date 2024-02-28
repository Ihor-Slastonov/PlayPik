import { imgLoadApi } from '../axiosConfig';

const imgLoadApiKey = import.meta.env.VITE_IMGBB_API_KEY;

const uploadImage = async imageFile => {
    try {
        const formData = new FormData();
        formData.append('key', imgLoadApiKey);
        formData.append('image', imageFile);

        const response = await imgLoadApi.post('', formData);

        return response?.data?.data?.display_url;
    } catch (error) {
        const message = error?.response?.data
            ? error.response.message
            : error.message;

        console.error('Error fetching data:', message);
        return error;
    }
};

export { uploadImage };
