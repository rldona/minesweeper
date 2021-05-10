import Square from '../Square';

import './Board.css';

export default function Board({ squares }) {
  return (
    <div className="Board">
      {
        squares.map((square, index) => (
          <Square key={index} square={square} />
        ))
      }
    </div>
  );
}
