import axios from 'axios';

const API_KEY = '31530829-0eb4b5ab815420784883b782b';


const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
params: {
  per_page: '12',
  orientation: "horizontal",
  key: API_KEY,
  safesearch: "true",
  image_type: "photo"
}
});

export const getImages = async (query, page="1") => {
 const searchResult = await pixabayApi.get("", {params: {q: query, page }})
  return searchResult.data;
}