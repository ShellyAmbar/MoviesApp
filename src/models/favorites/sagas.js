import {put, takeEvery} from 'redux-saga/effects';
import {
  getFavoritesActionError,
  getFavoritesActionSuccess,
  removeFromFavoritesActionError,
  removeFromFavoritesActionSuccess,
  setToFavoritesActionError,
  setToFavoritesActionSuccess,
} from './actions';
import {
  ADD_TO_FAVORITE_MOVIES_REQUEST,
  GET_FAVORITE_MOVIES_REQUEST,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST,
} from './types';

function* handlerGetFavorites() {
  yield takeEvery(GET_FAVORITE_MOVIES_REQUEST, getFavorites);
}

function* handlerAddToFavorites() {
  yield takeEvery(ADD_TO_FAVORITE_MOVIES_REQUEST, addToFavorites);
}
function* handlerRemoveFromFavorites() {
  yield takeEvery(REMOVE_FROM_FAVORITE_MOVIES_REQUEST, removeFromFavorites);
}

function* getFavorites() {
  try {
    //TODO get favorites from firestore database
    const favorites = [];

    yield put(getFavoritesActionSuccess());
  } catch (error) {
    yield put(getFavoritesActionError(error));
  }
}
function* addToFavorites(action) {
  try {
    yield put(setToFavoritesActionSuccess(action.favorite));
  } catch (error) {
    yield put(setToFavoritesActionError(error));
  }
}

function* removeFromFavorites(favirte) {
  try {
    yield put(removeFromFavoritesActionSuccess(favirte));
  } catch (error) {
    yield put(removeFromFavoritesActionError(error));
  }
}

export {handlerGetFavorites, handlerAddToFavorites, handlerRemoveFromFavorites};
