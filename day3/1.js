const lib = require("../lib");

const roadList = lib.readFileToArray("./input.txt");

const rowsInMap = roadList.length - 1;
const lineLength = roadList[0].length;
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

  treesOnTheRoad = getTree(roadList[indexRow][indexLine]);
}

console.log(treesOnTheRoad);
