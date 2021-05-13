import { createStore } from 'redux';
import reducer from './reducers';

import { generateBoard } from '../utils';

const initialState = {
  squares: generateBoard(),
  gameover: false
};

export const store = createStore(
  reducer,
  initialState
);
