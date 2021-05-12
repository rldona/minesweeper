import { createStore } from 'redux';
import reducer from './reducers';

import { generateBoard } from '../utils';

const initialState = {
  squares: generateBoard()
};

export const store = createStore(
  reducer,
  initialState
);
