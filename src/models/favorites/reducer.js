import {
  ADD_TO_FAVORITE_MOVIES_REQUEST_FAILURE,
  ADD_TO_FAVORITE_MOVIES_REQUEST_SUCCESS,
  GET_FAVORITE_MOVIES_REQUEST_FAILURE,
  GET_FAVORITE_MOVIES_REQUEST_SUCCESS,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST_FAILURE,
  REMOVE_FROM_FAVORITE_MOVIES_REQUEST_SUCCESS,
} from './types';
const initialState = {
  favorites: [],
  err: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_MOVIES_REQUEST_SUCCESS: {
      const favorites = state.favorites;

      return {...state};
    }
    case GET_FAVORITE_MOVIES_REQUEST_FAILURE: {
      return {...state, err: action.err};
    }
    case ADD_TO_FAVORITE_MOVIES_REQUEST_SUCCESS: {
      const newItem = action.payload;

      let favoritesList = state.favorites;
      let isExist = false;
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i].id === newItem.id) {
          isExist = true;
        }
      }

      if (!isExist) {
        favoritesList.push(newItem);
      }

      return {
        ...state,
        favorites: favoritesList,
      };
    }

    case ADD_TO_FAVORITE_MOVIES_REQUEST_FAILURE: {
      return {...state, err: action.err};
    }

    case REMOVE_FROM_FAVORITE_MOVIES_REQUEST_SUCCESS: {
      const itemToRemove = action.payload.payload;
      const filteredList = state.favorites.filter(
        item => item.title != itemToRemove.title,
      );

      return {
        ...state,
        favorites: [...filteredList],
      };
    }

    case REMOVE_FROM_FAVORITE_MOVIES_REQUEST_FAILURE: {
      return {...state, err: action.err};
    }

    default:
      return state;
  }
};

export {reducer, initialState};
