import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '40379426-0df14d4b6ac3f7b4d7f78cb30';

export const perPage = 12;

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

// export async function fetchImagesByQuery(query, page) {
//   const params = new URLSearchParams({
//     key: '40379426-0df14d4b6ac3f7b4d7f78cb30',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 12,
//   });
//   const responce = await axios.get(`${params}`);
//   return responce.data;
// }

export const normalazedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageYRL }) => {
    return { id, tags, webformatURL, largeImageYRL };
  });
