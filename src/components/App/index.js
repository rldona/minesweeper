import { generateBoard } from '../../utils';

import './App.css';

import Board from '../Board';

export default function App() {
  const squares = generateBoard();

  return (
    <div className="App">
      <Board squares={squares} />
    </div>
  );
}
