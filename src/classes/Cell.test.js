const { COLORS, DIRECTIONS, OPPOSITEDIRECTIONS, Cell } = require("./Cell")

it(' should contain green, purple, grey, white', () => {
  expect(COLORS).toEqual({
    green: "green",
    purple: "purple",
    grey: "grey",
    white: "white"
  })
});

it(' should contain top, right, bottom, left', () => {
  expect(DIRECTIONS).toEqual({
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left"
  })
});

it(' should contain opposite directions', () => {
  expect(OPPOSITEDIRECTIONS[DIRECTIONS.top]).toEqual("bottom");
  expect(OPPOSITEDIRECTIONS[DIRECTIONS.right]).toEqual("left");
  expect(OPPOSITEDIRECTIONS[DIRECTIONS.bottom]).toEqual("top");
  expect(OPPOSITEDIRECTIONS[DIRECTIONS.left]).toEqual("right");
});

it(' should construct a cell with cells in each direction', () => {
  const testCell = new Cell(
    new Cell(null, null, null, null, COLORS.white),
    new Cell(null, null, null, null, COLORS.grey),
    new Cell(null, null, null, null, COLORS.purple),
    new Cell(null, null, null, null, COLORS.green),
  );
  expect(testCell.color).toEqual(null);
  expect(testCell.top.color).toEqual(COLORS.white);
  expect(testCell.right.color).toEqual(COLORS.grey);
  expect(testCell.bottom.color).toEqual(COLORS.purple);
  expect(testCell.left.color).toEqual(COLORS.green);
});

it(' should construct a cell matrix of dimensions rows x columns', () => {
  const testMatrix = Cell.buildMatrix(2, 4);
  expect(testMatrix[1][3]).toBeInstanceOf(Cell);
});