const { COLORS, DIRECTIONS, OPPOSITEDIRECTIONS } = require("../classes/Cell");


function hasAdjacentColor(selectedCell, color, direction = null) {
  let hasNeighbor = false;
  let customDirections = Object.values(DIRECTIONS)
  if (direction !== null) {
    customDirections.splice(customDirections.indexOf(direction), 1);
  }
  customDirections.forEach((direction) => {
    if (selectedCell[direction] !== null && selectedCell[direction].color === color) {
      hasNeighbor = true;
    }
  })
  return hasNeighbor;
}

function neighborCheckup(selectedCell) {
  let neighbors = []
  if (selectedCell.top && selectedCell.top.left){
    neighbors.push(selectedCell.top.left);
  } if (selectedCell.bottom && selectedCell.bottom.right) {
    neighbors.push(selectedCell.bottom.right);
  }
  neighbors.forEach(cell => {
    Object.values(DIRECTIONS).forEach(direction => {
      checkForGrey(cell, direction, true);
    });
  });
}

function checkForGrey(selectedCell, direction, isForward) {
  if (hasAdjacentColor(selectedCell, COLORS.purple, direction) && hasAdjacentColor(selectedCell, COLORS.green, direction)) {
      selectedCell.color = COLORS.grey;
  }
  if (selectedCell[direction] === null) {
    if (!isForward){
      return;
    }
    checkForGrey(selectedCell[OPPOSITEDIRECTIONS[direction]], OPPOSITEDIRECTIONS[direction], false);
    return;
  } else {
    checkForGrey(selectedCell[direction], direction, isForward);
  }
}

function selectAdjacentInDirection(selectedCell, direction, color) {
  if (selectedCell.color === COLORS.white) {
    selectedCell.color = color;
  }
  if(selectedCell[direction] === null) {
    return;
  }
  selectAdjacentInDirection(selectedCell[direction], direction, color);
}

function selectAllAdjacent(selectedCell, color) {
  Object.values(DIRECTIONS).forEach(direction => {
    selectAdjacentInDirection(selectedCell, direction, color);
  });
  Object.values(DIRECTIONS).forEach(direction => {
    checkForGrey(selectedCell, direction, true);
  });
  neighborCheckup(selectedCell);
}

module.exports = {selectAllAdjacent, selectAdjacentInDirection, checkForGrey, neighborCheckup, hasAdjacentColor};