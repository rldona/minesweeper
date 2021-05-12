import {
  CHECKED_SQUARE
} from '../actions/types';

const listReducer = (state, action) => {
  switch (action.type) {
    case CHECKED_SQUARE:
      const newArray = [...state.squares];

      newArray[action.payload].checked = true;

      return {
        ...state,
        squares: newArray
      }

    default:
      return state;
  }
}

export default listReducer;
