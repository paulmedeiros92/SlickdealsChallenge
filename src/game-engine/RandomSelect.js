const { COLORS } = require("../classes/Cell");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// TODO: optimize this
function randomSelect(rowMax, columnMax, cells) {
  let isFound = false;
  let row = 0, col = 0;
  while(!isFound){
    row = getRandomInt(rowMax);
    col = getRandomInt(columnMax);
    if (cells[row][col].color === COLORS.white){
      isFound = true;
    }
  }

  return { row, col };
}

module.exports = {randomSelect};