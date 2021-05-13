import { useDispatch } from "react-redux";
import { checkedSquare, checkedEmptySquare, toggleFlag, setBoardVisible } from '../../redux/actions';

import './Square.css';

export default function Square({ square, gameover }) {
  const dispatch = useDispatch();

  const explore = (e) => {
    e.preventDefault();

    console.log(gameover);

    if (e.type === 'click') {
      if (square.type === 'mine') {
        alert('Game over');
        dispatch(setBoardVisible(square.id));
        return 0;
      }

      if (square.flag) {
        console.log('flag!!');
        return 0;
      }

      if (square.minesAround > 0) {
        dispatch(checkedSquare(square.id));
      } else {
        console.log('empty');
        dispatch(checkedEmptySquare(square.id));
      }
    } else {
      if (square.type === 'mine' || square.flag) dispatch(toggleFlag(square.id));
    }
  }

  const changeClass = () => {
    let classComplex = '';

    if (square.type === 'mine') classComplex = ' hasMine';
    if (square.checked) classComplex = classComplex + ' hasChecked';
    if (square.flag) classComplex = classComplex + ' hasFlag';

    return `Square ${classComplex}`;
  }

  return (
    <div className="container">
      <div id={square.id} className={changeClass()} onClick={explore} onContextMenu={explore}>
        { !square.checked ? <span></span> : null }
        {square.minesAround}
      </div>
    </div>
  );
}
