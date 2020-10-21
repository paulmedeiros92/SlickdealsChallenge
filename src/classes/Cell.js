const COLORS = {
  green: "green",
  purple: "purple",
  grey: "grey",
  white: "white"
}

const DIRECTIONS = {
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left"
}

const OPPOSITEDIRECTIONS = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}

class Cell {
  static buildMatrix(rows, columns) {
    let cells = Array.from({length: rows}, () => (Array.from({length: columns}, () => (new Cell()))));
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < columns; j++) {
        cells[i][j].top = i === 0 ? null : cells[i - 1][j];
        cells[i][j].right = j === columns-1 ? null : cells[i][j + 1];
        cells[i][j].bottom = i === rows-1 ? null : cells[i + 1][j];
        cells[i][j].left = j === 0 ? null : cells[i][j - 1];
        cells[i][j].color = COLORS.white;
      }
    }
    return cells;
  }

  constructor(top = null, right = null, bottom = null, left = null, color = null) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.color = color;
  }
}

export {Cell, COLORS, DIRECTIONS, OPPOSITEDIRECTIONS};