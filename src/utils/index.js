const configBoard = {
  width: 10,
  mines: 20
}

const minesArray = Array(configBoard.mines).fill('mine');
const emptyArray = Array(configBoard.width * configBoard.width - configBoard.mines).fill('valid');
const gameArray = emptyArray.concat(minesArray);
const suffledArray = gameArray.sort(() => Math.random() - 0.5);

const fillNumbers = (squareArray) => {
  for (let i = 0; i < squareArray.length; i++) {
    let minesAround = 0;

    const isLeftEdge = (i % configBoard.width === 0);
    const isRightEdge = (i % configBoard.width === configBoard.width - 1);

    if (squareArray[i].type === 'valid') {
      if (i > 0 && !isLeftEdge && squareArray[i - 1].type === 'mine') minesAround++;
      if (i > 9 && !isRightEdge && squareArray[i + 1 - configBoard.width].type === 'mine') minesAround++;
      if (i > 10 && squareArray[i - configBoard.width].type === 'mine') minesAround++;
      if (i > 11 && !isLeftEdge && squareArray[i - 1 - configBoard.width].type === 'mine') minesAround++;
      if (i < 98 && !isRightEdge && squareArray[i + 1].type === 'mine') minesAround++;
      if (i < 90 && !isLeftEdge && squareArray[i - 1 + configBoard.width].type === 'mine') minesAround++;
      if (i < 88 && !isRightEdge && squareArray[i + 1 + configBoard.width].type === 'mine') minesAround++;
      if (i < 89 && squareArray[i + configBoard.width].type === 'mine') minesAround++;

      squareArray[i].minesAround = minesAround > 0 ? minesAround : null;
    }
  }
}

const generateBoard = () => {
  const squareArray = [];

  for (let i = 0; i < configBoard.width*configBoard.width; i++) {
    squareArray.push(
      {
        id: i,
        type: suffledArray[i],
        flag: false
      }
    );
  }

  fillNumbers(squareArray);

  return squareArray;
}

export {
  generateBoard
}
