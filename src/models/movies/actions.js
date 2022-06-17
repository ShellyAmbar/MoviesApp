import {GET_MOVIES_REQUEST_FAILURE, GET_MOVIES_REQUEST_SUCCESS} from './types';
function moviesActionSuccess(payload) {
  return {
    type: GET_MOVIES_REQUEST_SUCCESS,
    payload: payload,
  };
}
function moviesActionError(error) {
  return {
    type: GET_MOVIES_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
}

export {moviesActionError, moviesActionSuccess};
