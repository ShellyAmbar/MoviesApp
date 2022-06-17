import {put, takeEvery, call} from 'redux-saga/effects';
import {moviesActionError, moviesActionSuccess} from './actions';
const url = 'http://api.mediastack.com/v1/news?access_key=';
const api_access_key = 'f0d01386d5b1bd39153cf9373f7626e3';
import {GET_MOVIES_REQUEST} from './types';
import {getMoviesByGenreCall} from './calls';
import {CATEGORIES} from './categories';
import {NavigationContext} from '@react-navigation/native';

function* moviesSaga() {
  yield takeEvery(GET_MOVIES_REQUEST, getMoviesByGenre);
}

function* getMoviesByGenre(action) {
  try {
    const response = yield call(getMoviesByGenreCall, action.genre);
    const responseBody = yield response.json();

    const data = responseBody.results;

    yield put(moviesActionSuccess(data));
  } catch (error) {
    yield put(moviesActionError(error));
  }
}

export {moviesSaga};
