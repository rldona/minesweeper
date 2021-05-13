import { useSelector } from "react-redux";

import Square from '../Square';

import './Board.css';

export default function Board() {
  const squares = useSelector((state) => state.squares);
  const gameover = useSelector((state) => state.gameover);

  return (
    <div className="container">
      <div className="Board">
        {
          squares.map((square, index) => (
            <Square key={index} square={square} gameover={gameover} />
          ))
        }
        { gameover ? <div className="gameover">Game Over</div> : null }
      </div>
    </div>
  );
}
