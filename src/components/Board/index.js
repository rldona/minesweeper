import { useDispatch, useSelector } from "react-redux";
import { resetGame } from '../../redux/actions';
import { FaRegFlag, FaRegGrin, FaRegFrown } from "react-icons/fa";

import Square from '../Square';

import './Board.css';

export default function Board() {
  const dispatch = useDispatch();

  const squares = useSelector((state) => state.squares);
  const gameover = useSelector((state) => state.gameover);

  const newGame = () => {
    dispatch(resetGame());
  }

  console.log(squares);

  return (
    <div className="container">
      <div className="panel-info">
        <div className="flags-counter"><span>20</span> <FaRegFlag size={20}/></div>
        <button onClick={newGame}>{ gameover ? <FaRegFrown size={25}/> : <FaRegGrin size={25}/>}</button>
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
