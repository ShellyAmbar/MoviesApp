import {put, takeEvery, call} from 'redux-saga/effects';
import {genersActionError, genersActionSuccess} from './actions';
import {GET_GENERS_REQUEST} from './types';
import {getGenersCall} from './calls';

function* genersSaga() {
  yield takeEvery(GET_GENERS_REQUEST, getGeners);
}

function* getGeners() {
  try {
    const response = yield call(getGenersCall);
    const responseBody = yield response.json();
    const data = responseBody.genres;

    yield put(genersActionSuccess(data));
  } catch (error) {
    yield put(genersActionError(error));
  }
}

export {genersSaga};
