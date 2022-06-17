import {GET_GENERS_REQUEST_FAILURE, GET_GENERS_REQUEST_SUCCESS} from './types';
function genersActionSuccess(payload) {
  return {
    type: GET_GENERS_REQUEST_SUCCESS,

    payload: payload,
  };
}
function genersActionError(error) {
  return {
    type: GET_GENERS_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
}

export {genersActionError, genersActionSuccess};
