import {
  CHECKED_SQUARE,
} from './types';

export const checkedSquare = (item) => ({
  type: CHECKED_SQUARE,
  payload: item
});
