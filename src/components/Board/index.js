import { useSelector } from "react-redux";
import { FaRegFlag, FaRegGrin, FaRegFrown } from "react-icons/fa";

import Square from '../Square';

import './Board.css';

export default function Board() {
  const squares = useSelector((state) => state.squares);
  const gameover = useSelector((state) => state.gameover);

  const resetGame = () => {
    console.log('reset game');
  }

  return (
    <div className="container">
      <div className="panel-info">
        <div className="flags-counter"><span>20</span> <FaRegFlag size={20}/></div>
        <button onClick={resetGame}>{ gameover ? <FaRegFrown size={25}/> : <FaRegGrin size={25}/>}</button>
        <div className="timer-box">00:00</div>
      </div>
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
