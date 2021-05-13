import {
  CHECKED_SQUARE,
  CHECKED_EMPTY_SQUARE,
  TOGGLE_FLAG,
  SET_VISIBLE_BOARD
} from '../actions/types';

import { findEmptySquare } from '../../utils';

const listReducer = (state, action) => {
  const newArray = [...state.squares];

  switch (action.type) {
    case CHECKED_SQUARE:
      newArray[action.payload].checked = true;

      return {
        ...state,
        squares: newArray
      }

    case CHECKED_EMPTY_SQUARE:
      newArray[action.payload].checked = true;

      const newArrayWidthEmptysMarked = findEmptySquare(newArray);

      return {
        ...state,
        squares: newArrayWidthEmptysMarked
      }

    case TOGGLE_FLAG:
      newArray[action.payload].flag = newArray[action.payload].flag ? false : true;
      newArray[action.payload].type = newArray[action.payload].type ? null : 'mine';

      return {
        ...state,
        squares: newArray
      }

    case SET_VISIBLE_BOARD:
      for (let i = 0; i < newArray.length; i++) {
        newArray[i].checked = true;
      }

      return {
        ...state,
        squares: newArray
      }

    default:
      return state;
  }
}

export default listReducer;
