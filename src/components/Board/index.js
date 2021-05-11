import Square from '../Square';

import './Board.css';

export default function Board({ squares }) {
  return (
    <div className="Board">
      {
        squares.map((items, index) => (
          items.map((subItems, sIndex) => (
            <Square key={index + sIndex} squareList={squares} square={subItems} />
          ))
        ))
      }
    </div>
  );
}
