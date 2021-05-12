import { useDispatch } from "react-redux";
import { checkedSquare } from '../../redux/actions';

import './Square.css';

export default function Square({ square }) {
  const dispatch = useDispatch();

  const explore = () => {
    if (square.type === 'mine') {
      alert('Game over');
    } else {
      if (square.minesAround > 0) {
        dispatch(checkedSquare(square.id));
      }
    }
    console.log(square);
  }

  return (
    <div id={square.id} className={`Square ${square.type === 'mine' ? 'hasMine' : square.checked ? 'hasChecked' : '' }`} onClick={explore}>
      {square.minesAround}
    </div>
  );
}
