import { useState } from 'react';
import { detectSquareMines } from '../../utils';

import './Square.css';

export default function Square({ squareList, square }) {
  const [ totalMines, setNumber ] = useState(null);

  const explore = () => {
    if (square.hasMine) {
      alert('Game over');
      return 0;
    }

    console.log(square);

    const totalMinesDetected = detectSquareMines(squareList, square);

    setNumber(totalMinesDetected);

    // No tiene minas, es una casilla en blanco
    // if (!totalMinesDetected) {
    //   console.log('No tiene minas alrededor');
    //   setNumber(null);
    //   // Marca la zona y descubre los número más cercanos
    // }
  }

  return (
    <div className={`Square ${square.hasMine ? 'hasMine' : ''}`} onClick={explore}>
      { totalMines }
      {/* { square.totalMines } */}
      {/* { square.id } */}
    </div>
  );
}
