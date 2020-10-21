const { COLORS } = require("./classes/Cell");

function calculate(cells) {
  let statMap = new Map();
  Object.values(COLORS).forEach(color => statMap.set(color, 0));
  cells.forEach(row => {
    row.forEach(cell => {
      statMap.set(cell.color, statMap.get(cell.color) + 1);
    })
  });
  return statMap;
}

module.exports = {calculate}