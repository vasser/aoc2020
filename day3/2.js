const lib = require("../lib");

const roadMap = lib.readFileToArray("./input.txt");

const rowsInMap = roadMap.length - 1;
const lineLength = roadMap[0].length;

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
      roadMap[indexRow][indexLine] === "#"
        ? treesOnTheRoad + 1
        : treesOnTheRoad;
  }

  treesPerSloap.push(treesOnTheRoad);
  treesOnTheRoad = 0;
  indexLine = 0;
  indexRow = 0;
}

console.log(treesPerSloap.reduce((accum, i) => accum * i));
