const { Cell, COLORS, DIRECTIONS } = require("../classes/Cell");
const { hasAdjacentColor, checkForGrey, selectAdjacentInDirection, selectAllAdjacent } = require("./AdjacentSelect");

it(' detects adjacent green cell on top', () => {
  const testCell = new Cell(
    new Cell(null, null, null, null, COLORS.green),
    new Cell(null, null, null, null, COLORS.white),
    new Cell(null, null, null, null, COLORS.white),
    new Cell(null, null, null, null, COLORS.white),
  )
  expect(hasAdjacentColor(testCell, COLORS.green, DIRECTIONS.bottom)).toEqual(true);
});

it(' ignores adjacent green cell on top', () => {
  const testCell = new Cell(
    new Cell(null, null, null, null, COLORS.green),
    new Cell(null, null, null, null, COLORS.white),
    new Cell(null, null, null, null, COLORS.white),
    new Cell(null, null, null, null, COLORS.white),
  )
  expect(hasAdjacentColor(testCell, COLORS.green, DIRECTIONS.top)).toEqual(false);
});

it(' checks a line of cells in both directions for cells that need to be turned grey', () => {
  // [
  //   [new Cell(null, null, null, null, COLORS.purple),  new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.green)],
  //   [new Cell(null, null, null, null, COLORS.white),   new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),   new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.purple),  new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.grey)],
  //   [new Cell(null, null, null, null, COLORS.white),   new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),   new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.purple),  new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.green)],
  // ];
  const cells = Cell.buildMatrix(7, 3);
  cells[0][0].color = COLORS.purple;
  cells[6][0].color = COLORS.purple;
  cells[0][2].color = COLORS.green;
  cells[6][2].color = COLORS.green;
  cells[3][0].color = COLORS.purple;
  cells[3][2].color = COLORS.grey;
  checkForGrey(cells[3][1], DIRECTIONS.top, true);
  expect(cells[0][1].color).toEqual(COLORS.grey);
  expect(cells[3][1].color).toEqual(COLORS.white);
  expect(cells[6][1].color).toEqual(COLORS.grey);
});

it(' paints a line to the right of the selected cell green', () => {
  // [
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  // ];
  const cells = Cell.buildMatrix(7, 4);
  selectAdjacentInDirection(cells[3][1], DIRECTIONS.right, COLORS.green);
  expect(cells[3][2].color).toEqual(COLORS.green);
  expect(cells[3][3].color).toEqual(COLORS.green);
  expect(cells[3][0].color).toEqual(COLORS.white);
});

it(' paints a line to the top, right, bottom, and left of the selected cell green', () => {
  // [
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  //   [new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white),  new Cell(null, null, null, null, COLORS.white)],
  // ];
  const cells = Cell.buildMatrix(7, 4);
  selectAllAdjacent(cells[3][1], COLORS.green);
  expect(cells[3][3].color).toEqual(COLORS.green);
  expect(cells[3][0].color).toEqual(COLORS.green);
  expect(cells[0][1].color).toEqual(COLORS.green);
  expect(cells[6][1].color).toEqual(COLORS.green);
  expect(cells[6][0].color).toEqual(COLORS.white);
  expect(cells[6][3].color).toEqual(COLORS.white);
  expect(cells[0][0].color).toEqual(COLORS.white);
  expect(cells[0][3].color).toEqual(COLORS.white);
});