import {
  reducer as favoritesReducer,
  initialState as favortesInitialState,
} from './favorites/reducer';
import {
  reducer as moviesReducer,
  initialState as moviesInitialState,
} from './movies/reducer';
import {
  reducer as userReducer,
  initialState as userInitialState,
} from './user/reducer';
import {
  reducer as genresReducer,
  initialState as genresInitialState,
} from './generes/reducer';

import {combineReducers} from 'redux';

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  favorites: favoritesReducer,
  genres: genresReducer,
});

const rootState = {
  user: userInitialState,
  movies: moviesInitialState,
  favorites: favortesInitialState,
  genres: genresInitialState,
};

export {reducer, rootState};
