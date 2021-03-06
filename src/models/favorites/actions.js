import {
  ADD_TO_FAVORITE_MOVIES_REQUEST_FAILURE,
  ADD_TO_FAVORITE_MOVIES_REQUEST_SUCCESS,
  GET_FAVORITE_MOVIES_REQUEST_FAILURE,
  GET_FAVORITE_MOVIES_REQUEST_SUCCESS,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST_FAILURE,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST_SUCCESS,
} from './types';
//GET
const getFavoritesActionSuccess = () => {
  return {
    type: GET_FAVORITE_MOVIES_REQUEST_SUCCESS,
  };
};
const getFavoritesActionError = error => {
  return {
    type: GET_FAVORITE_MOVIES_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};
//SET

const setToFavoritesActionSuccess = obj => {
  return {
    type: ADD_TO_FAVORITE_MOVIES_REQUEST_SUCCESS,
    payload: obj,
  };
};
const setToFavoritesActionError = error => {
  return {
    type: ADD_TO_FAVORITE_MOVIES_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

//DELETE

const removeFromFavoritesActionSuccess = payload => {
  return {
    type: REMOVE_FROM_FAVORITE_MOVIES_REQUEST_SUCCESS,
    payload: payload,
  };
};
const removeFromFavoritesActionError = error => {
  return {
    type: REMOVE_FROM_FAVORITE_MOVIES_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

export {
  getFavoritesActionError,
  getFavoritesActionSuccess,
  setToFavoritesActionSuccess,
  setToFavoritesActionError,
  removeFromFavoritesActionSuccess,
  removeFromFavoritesActionError,
};
