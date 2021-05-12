import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import Board from '../Board';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}
