const _generateMines = () => {
  let mines = [];

  for (let i = 0; i < 10; i++) {
    mines.push(Math.floor((Math.random() * 9) + 1));
  }

  return mines;
}

const generateBoard = () => {
  const mines = _generateMines();

  var squareList = Array.from(Array(10), () => new Array(10));

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      squareList[i][j] = {
        id: i,
        file: i,
        column: j,
        hasMine: false
      };
      const hastMine = squareList[i][j].id === mines[j];

      if (hastMine) {
        squareList[i][j].hasMine = true;
      }

      if (detectSquareMines(squareList, squareList[i][j]) > 0 && !hastMine) {
        squareList[i][j].totalMines = detectSquareMines(squareList, squareList[i][j]);
      }
    }
  }

  return squareList;
}

const detectSquareMines = (squareList, square) => {
  let upperLeftCorner = 0, upperCenter = 0, rightUpperCorner = 0, centerLeft = 0, lowerLeftCorner = 0, centerRight = 0, lowerCenter = 0, lowerRightCorner = 0;

  const fileLess = square.file - 1;
  const filePlus = square.file + 1;
  const columnLess = square.column - 1;
  const columnPlus = square.column + 1;

  if (fileLess === -1 || columnLess === -1) {
    console.log('-1');
  } else {
    if (squareList[fileLess][columnLess]) {
      upperLeftCorner = squareList[fileLess][columnLess].hasMine ? 1 : 0;
    }
    if (squareList[fileLess][square.column]) {
      upperCenter = squareList[fileLess][square.column].hasMine ? 1 : 0;
    }
    if (squareList[fileLess][columnPlus]) {
      rightUpperCorner = squareList[fileLess][columnPlus].hasMine ? 1 : 0;
    }
    if (squareList[square.file][columnLess]) {
      centerLeft = squareList[square.file][columnLess].hasMine ? 1 : 0;
    }
    // if (squareList[filePlus][columnLess]) {
    //   lowerLeftCorner = squareList[filePlus][columnLess].hasMine ? 1 : 0;
    // }
    if (squareList[square.file][columnPlus]) {
      centerRight = squareList[square.file][columnPlus].hasMine ? 1 : 0;
    }
    // if (squareList[filePlus][square.column]) {
    //   lowerCenter = squareList[filePlus][square.column].hasMine ? 1 : 0;
    // }
    // if (squareList[filePlus][columnPlus]) {
    //   lowerRightCorner = squareList[filePlus][columnPlus].hasMine ? 1 : 0;
    // }
  }

  // console.log(upperLeftCorner);

  // upperLeftCorner = 1; // squareList[fileLess][columnLess].hasMine ? 1 : 0;
  // upperCenter = 0; // squareList[fileLess][square.column].hasMine ? 1 : 0;
  // rightUpperCorner = 0; // squareList[fileLess][columnPlus].hasMine ? 1 : 0;
  // centerLeft = 0; // squareList[square.file][columnLess].hasMine ? 1 : 0;
  // lowerLeftCorner = 0; // squareList[filePlus][columnLess].hasMine ? 1 : 0;
  // centerRight = 0; // squareList[square.file][columnPlus].hasMine ? 1 : 0;
  // lowerCenter = 0; // squareList[filePlus][square.column].hasMine ? 1 : 0;
  // lowerRightCorner = 1; // squareList[filePlus][columnPlus].hasMine ? 1 : 0;

  return upperLeftCorner + upperCenter + rightUpperCorner + centerLeft + lowerLeftCorner + centerRight + lowerCenter + lowerRightCorner;
}

// const markSquareNumbers = (squareList) => {
//   squareList.forEach(squareFile => (
//     squareFile.forEach(square => {
//       console.log(square);
//       console.log(detectSquareMines(squareList, square));
//     })
//   ));
// }

export {
  generateBoard,
  detectSquareMines,
  // markSquareNumbers
}
