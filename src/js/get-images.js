import axios from "axios";
export { getImages };

const API_URL = 'https://pixabay.com/api/';
const KEY = '44993602-d27a6bb35adbaddc31f5b3355';

axios.defaults.baseURL = API_URL;

async function getImages(query, page, perPage) {
    const response = await axios.get('', {
        params: {
            key: KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page: perPage,
        },
    });
    return response;
}