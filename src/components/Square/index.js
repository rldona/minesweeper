import { useState } from 'react';

import './Square.css';

export default function Square({ square, squareList }) {
  const [ number, setNumber ] = useState(null);

  const explore = () => {
    // Detona una mina
    if (square.hasMine) {
      alert('Game over');
      return 0;
    }

    // Sacar a utils
    const upperLeftCorner = squareList[square.file - 1][square.column - 1].hasMine ? 1 : 0;
    const upperCenter = squareList[square.file - 1][square.column].hasMine ? 1 : 0;
    const rightUpperCorner = squareList[square.file - 1][square.column + 1].hasMine ? 1 : 0;
    const centerLeft = squareList[square.file][square.column - 1].hasMine ? 1 : 0;
    const lowerLeftCorner = squareList[square.file + 1][square.column - 1].hasMine ? 1 : 0;
    const centerRight = squareList[square.file][square.column + 1].hasMine ? 1 : 0;
    const lowerCenter = squareList[square.file + 1][square.column].hasMine ? 1 : 0;
    const lowerRightCorner = squareList[square.file + 1][square.column + 1].hasMine ? 1 : 0;

    const totalMinesCircle = upperLeftCorner + upperCenter + rightUpperCorner + centerLeft + lowerLeftCorner + centerRight + lowerCenter + lowerRightCorner;
    setNumber(totalMinesCircle);

    // No tiene minas, es una casilla en blanco
    if (!totalMinesCircle) {
      console.log('No tiene minas alrededor');
      setNumber(null);
      // Marca la zona y descubre los número más cercanos
    }
  }

  return (
    <div className={`Square ${square.hasMine ? 'hasMine' : ''}`} onClick={explore}>
      { number }
      {/* { square.id } */}
    </div>
  );
}
