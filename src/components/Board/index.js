import { generateBoard } from '../../utils';

import Square from '../Square';

import './Board.css';

export default function Board() {
  return (
    <div className="Board">
      {
        generateBoard().map((square, index) => (
          <Square key={index} square={square} />
        ))
      }
    </div>
  );
}
