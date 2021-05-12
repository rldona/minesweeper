import { useSelector } from "react-redux";

import Square from '../Square';

import './Board.css';

export default function Board() {
  const squares = useSelector((state) => state.squares);

  console.log(squares);

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
