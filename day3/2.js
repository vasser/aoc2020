const lib = require("../lib");

const roadList = lib.readFileToArray("./input.txt");

const rowsInMap = roadList.length - 1;
const lineLength = roadList[0].length;

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const treesPerSloap = [];

let treesOnTheRoad = 0;
let indexLine = 0;
let indexRow = 0;

for (const [stepRight, stepDown] of slopes) {
  while (indexRow < rowsInMap) {
    indexLine =
      indexLine + stepRight < lineLength
        ? indexLine + stepRight
        : indexLine + stepRight - lineLength;

    indexRow += stepDown;

    treesOnTheRoad =
      roadList[indexRow][indexLine] === "#"
        ? treesOnTheRoad + 1
        : treesOnTheRoad;
  }

  treesPerSloap.push(treesOnTheRoad);
  treesOnTheRoad = 0;
  indexLine = 0;
  indexRow = 0;
}

console.log(treesPerSloap.reduce((accum, i) => accum * i));
