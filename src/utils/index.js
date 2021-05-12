const _generateMines = () => {
  let mines = [];

  for (let i = 1; i < 11; i++) {
    mines.push(Math.floor((Math.random() * 9) + 1));
  }

  return mines;
}

const generateBoard = () => {
  const mines = _generateMines();

  var squareList = Array.from(Array(11), () => new Array(11));

  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      squareList[i][j] = {
        id: i,
        file: i,
        column: j,
        hasMine: false
      };

      const hastMine = squareList[i][j].id === mines[j];

      const totalMines = detectSquareMines(squareList, squareList[i][j]);

      if (hastMine) {
        squareList[i][j].hasMine = true;
      } else {
        squareList[i][j].totalMines = totalMines > 0 ? totalMines : null;
      }
    }
  }

  return squareList;
}

const detectSquareMines = (squareList, square) => {
  let upperLeftCorner = 0, upperCenter = 0, rightUpperCorner = 0, centerLeft = 0, lowerLeftCorner = 0, centerRight = 0, lowerCenter = 0, lowerRightCorner = 0;

  const file = square.file;
  const column = square.column;
  const fileLess = square.file - 1;
  const filePlus = square.file + 1;
  const columnLess = square.column - 1;
  const columnPlus = square.column + 1;

  console.log(squareList);

  if ((file > 0 && file < 10) && (column > 0 && column <= 10) && (fileLess >= 0) && (filePlus >= 0) && (columnLess >= 0) && (columnPlus >= 0)) {
    if (squareList[fileLess][columnLess]) {
      upperLeftCorner = squareList[fileLess][columnLess].hasMine ? 1 : 0;
      console.log('upperLeftCorner: ' + upperLeftCorner);
    }

    if (squareList[fileLess][column]) {
      upperCenter = squareList[fileLess][column].hasMine ? 1 : 0;
      console.log('upperCenter: ' + upperCenter);
    }

    if (squareList[fileLess][columnPlus]) {
      rightUpperCorner = squareList[fileLess][columnPlus].hasMine ? 1 : 0;
      console.log('rightUpperCorner: ' + rightUpperCorner);
    }

    if (squareList[file][columnLess]) {
      centerLeft = squareList[file][columnLess].hasMine ? 1 : 0;
      console.log('centerLeft: ' + centerLeft);
    }

    if (squareList[filePlus][columnLess]) {
      lowerLeftCorner = squareList[filePlus][columnLess].hasMine ? 1 : 0;
      console.log('lowerLeftCorner: ' + lowerLeftCorner);
    }

    if (squareList[file][columnPlus]) {
      centerRight = squareList[file][columnPlus].hasMine ? 1 : 0;
      console.log('centerRight: ' + centerRight);
    }

    if (squareList[filePlus][column]) {
      lowerCenter = squareList[filePlus][column].hasMine ? 1 : 0;
      console.log('lowerCenter: ' + lowerCenter);
    }

    if (squareList[filePlus][columnPlus]) {
      lowerRightCorner = squareList[filePlus][columnPlus].hasMine ? 1 : 0;
      console.log('lowerRightCorner: ' + lowerRightCorner);
    }
  } else {
    console.log('----');
    console.log(square);
    console.log('----');
  }

  return upperLeftCorner + upperCenter + rightUpperCorner + centerLeft + lowerLeftCorner + centerRight + lowerCenter + lowerRightCorner;
}

export {
  generateBoard,
  detectSquareMines
}
