const _generateMines = () => {
  let mines = [];

  for (let i = 0; i < 10; i++) {
    mines.push(Math.floor((Math.random() * 90) + 1));
  }

  return mines;
}

const generateBoard = () => {
  let squareList = [];

  const mines = _generateMines();

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

export {
  generateBoard
}
