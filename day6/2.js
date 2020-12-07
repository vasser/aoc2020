const lib = require("../lib");

const answersMap = lib.readFileToArray("./input.txt");

let answersInBlock = [];

let sumOfCounts = 0;
let least = "";

for (let i = 0; i < answersMap.length; i++) {
  if (answersMap[i].length === 0) {
    for (const l of least) {
      if (answersInBlock.every((elem) => elem.split("").includes(l))) {
        sumOfCounts++;
      }
    }

    answersInBlock = [];
    least = "";
  } else {
    answersInBlock.push(answersMap[i]);

    if (!least || answersMap[i].length < least.length) {
      least = answersMap[i];
    }
  }
}

console.log(sumOfCounts);
