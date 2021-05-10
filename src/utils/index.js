const _generateMines = () => {
  let mines = [];

  for (let i = 0; i < 10; i++) {
    mines.push(Math.floor((Math.random() * 10) + 1));
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

      if (squareList[i][j].id === mines[j]) {
        squareList[i][j].hasMine = true;
      }
    }
  }

  return squareList;
}

export {
  generateBoard
}
