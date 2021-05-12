import { generateBoard } from '../../utils';

import Board from '../Board';

import './App.css';

export default function App() {
  const squares = generateBoard();

  // console.log(squares);

  return (
    <div className="App">
      <Board squares={squares} />
    </div>
  );
}
