import {
  CHECKED_SQUARE,
  CHECKED_EMPTY_SQUARE,
  TOGGLE_FLAG,
  SET_VISIBLE_BOARD,
  RESET_GAME
} from './types';

export const checkedSquare = (item) => ({
  type: CHECKED_SQUARE,
  payload: item
});

export const checkedEmptySquare = (item) => ({
  type: CHECKED_EMPTY_SQUARE,
  payload: item
});

export const toggleFlag = (item) => ({
  type: TOGGLE_FLAG,
  payload: item
});

export const setBoardVisible = (item) => ({
  type: SET_VISIBLE_BOARD,
  payload: item
});

export const resetGame = (item) => ({
  type: RESET_GAME,
  payload: item
});
