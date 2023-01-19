import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const makeOptions = (url) => {
  const options = {
    method: 'GET',
    url: BASE_URL + url,
    params: { part: 'snippet', maxResults: 40 },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
    }
  };
  return options;
}


export const fetchFromApi = async (url) => {
  const { data } = await axios.request(makeOptions(url));
  return data;
}