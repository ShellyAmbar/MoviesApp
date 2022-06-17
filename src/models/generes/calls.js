import {API_KEY, BASE_URL} from '../../config';

export const getGenersCall = () => {
  return fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&amp;amp;language=en-US&amp;amp;page=1`,
  );
};
