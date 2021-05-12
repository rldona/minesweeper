import { useDispatch } from "react-redux";
import { checkedSquare, setFlag } from '../../redux/actions';

import './Square.css';

export default function Square({ square }) {
  const dispatch = useDispatch();

  const explore = (e) => {
    e.preventDefault();

    if (e.type === 'click') {
      if (square.type === 'mine') {
        alert('Game over');
      } else {
        if (square.minesAround > 0) {
          dispatch(checkedSquare(square.id));
        }
      }
    } else {
      if (square.type === 'mine' || square.flag) {
        dispatch(setFlag(square.id));
      }
    }

    console.log(square);
  }

  const changeClass = () => {
    let classComplex = '';

    if (square.type === 'mine') classComplex = 'hasMine';
    if (square.checked) classComplex = 'hasChecked';
    if (square.flag) classComplex = 'hasFlag';

    return `Square ${classComplex}`;
  }

  return (
    <div id={square.id} className={changeClass()} onClick={explore} onContextMenu={explore}>
      {square.minesAround}
    </div>
  );
}
