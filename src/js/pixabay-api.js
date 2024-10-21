import axios from 'axios';

const API_KEY = '46638996-2a2e598d70d21a2b7de7c0e18';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Failed to fetch images');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
