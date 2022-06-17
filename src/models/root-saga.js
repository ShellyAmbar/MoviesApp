import {all, spawn} from 'redux-saga/effects';
import {handler as userSaga} from './user/sagas';
import {
  handlerGetFavorites as getFavoritesSaga,
  handlerAddToFavorites as addToFavoritesSaga,
  handlerRemoveFromFavorites as removeFromFavoritesSaga,
} from './favorites/sagas';
import {moviesSaga} from './movies/sagas';
import {genersSaga} from './generes/sagas';

function* rootSagas() {
  yield all([
    userSaga(),
    getFavoritesSaga(),
    addToFavoritesSaga(),
    removeFromFavoritesSaga(),
    genersSaga(),
    moviesSaga(),
  ]);
}

export {rootSagas};
