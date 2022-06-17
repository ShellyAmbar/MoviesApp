import {GET_MOVIES_REQUEST_FAILURE, GET_MOVIES_REQUEST_SUCCESS} from './types';

const initialState = {
  movies: [],
  err: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST_SUCCESS: {
      const movies = action.payload;

      return {...state, movies: action.payload};
    }
    case GET_MOVIES_REQUEST_FAILURE: {
      return {...state, err: action.err};
    }
    default:
      return state;
  }
};

export {reducer, initialState};
