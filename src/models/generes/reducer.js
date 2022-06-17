import {GET_GENERS_REQUEST_FAILURE, GET_GENERS_REQUEST_SUCCESS} from './types';

const initialState = {
  genres: [],
  err: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENERS_REQUEST_SUCCESS: {
      return {...state, genres: action.payload};
    }
    case GET_GENERS_REQUEST_FAILURE: {
      return {...state, err: action.err};
    }
    default:
      return state;
  }
};

export {reducer, initialState};
