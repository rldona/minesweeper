import './Board.css';

import Square from '../Square';

export default function Board() {
  const generateMines = () => {
    let mines = [];

    for (let i = 0; i < 10; i++) {
      mines.push(Math.floor((Math.random() * 90) + 1));
    }

    return mines;
  }

  const generateBoard = () => {
    let squareList = [];

    const mines = generateMines();

    for (let i = 0; i < 90; i++) {
      squareList.push({
        id: i,
        hasMine: false
      });
    }

    for (let i = 0; i < 90; i++) {
      for (let j = 0; j < mines.length - 1; j++) {
        if (squareList[i].id === mines[j]) {
          squareList[i].hasMine = true;
        }
      }
    }

    return squareList;
  }

  return (
    <div className="Board">
      {
        generateBoard().map((square, index) => (
          <Square key={index} square={square} hasMine />
        ))
      }
    </div>
  );
}
