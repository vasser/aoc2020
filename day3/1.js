const lib = require("../lib");

const roadMap = lib.readFileToArray("./input.txt");

const rowsInMap = roadMap.length - 1;
const lineLength = roadMap[0].length;
const stepRight = 3;
const stepDown = 1;

let indexLine = 0;
let indexRow = 0;
let treesOnTheRoad = 0;

function getTree(point) {
  return point === "#" ? treesOnTheRoad + 1 : treesOnTheRoad;
}

while (indexRow < rowsInMap) {
  indexLine =
    indexLine + stepRight < lineLength
      ? indexLine + stepRight
      : indexLine + stepRight - lineLength;
  indexRow += stepDown;

  treesOnTheRoad = getTree(roadMap[indexRow][indexLine]);
}

console.log(treesOnTheRoad);
