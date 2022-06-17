import {API_KEY, BASE_URL} from '../../config';

export const getMoviesByGenreCall = genre => {
  return fetch(
    `${BASE_URL}/movie/${genre}?api_key=${API_KEY}&amp;amp;language=en-US&amp;amp;page=1`,
  );
};
