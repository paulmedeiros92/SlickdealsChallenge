const { Cell, COLORS } = require("../classes/Cell");
const { randomSelect } = require("./RandomSelect");

it(' should return a random col and row that has not yet been selected', () => {
  const rowMax = 2;
  const colMax = 2;
  const cells = [
    [new Cell(null, null, null, null, COLORS.green), new Cell(null, null, null, null, COLORS.green)],
    [new Cell(null, null, null, null, COLORS.white), new Cell(null, null, null, null, COLORS.green)]
  ];
  const coordinates = randomSelect(rowMax, colMax, cells);
  expect(coordinates.row).toEqual(1);
  expect(coordinates.col).toEqual(0);
});