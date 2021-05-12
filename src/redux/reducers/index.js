import {
  CHECKED_SQUARE,
  TOGGLE_FLAG
} from '../actions/types';

const listReducer = (state, action) => {
  const newArray = [...state.squares];

  switch (action.type) {
    case CHECKED_SQUARE:
      newArray[action.payload].checked = true;

      return {
        ...state,
        squares: newArray
      }

    case TOGGLE_FLAG:
      newArray[action.payload].flag = newArray[action.payload].flag ? false : true;
      newArray[action.payload].type = newArray[action.payload].type ? null : 'mine';

      console.log(newArray[action.payload].flag);

      return {
        ...state,
        squares: newArray
      }

    default:
      return state;
  }
}

export default listReducer;
