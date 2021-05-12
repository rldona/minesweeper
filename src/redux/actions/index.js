import {
  CHECKED_SQUARE,
  TOGGLE_FLAG
} from './types';

export const checkedSquare = (item) => ({
  type: CHECKED_SQUARE,
  payload: item
});

export const setFlag = (item) => ({
  type: TOGGLE_FLAG,
  payload: item
});
