const lib = require("../lib");

const answersList = lib.readFileToArray("./input.txt");

let answersInBlock = [];

let sumOfCounts = 0;
let least = "";

for (let i = 0; i < answersList.length; i++) {
  if (answersList[i].length === 0) {
    for (const l of least) {
      if (answersInBlock.every((elem) => elem.split("").includes(l))) {
        sumOfCounts++;
      }
    }

    answersInBlock = [];
    least = "";
  } else {
    answersInBlock.push(answersList[i]);

    if (!least || answersList[i].length < least.length) {
      least = answersList[i];
    }
  }
}

console.log(`Part Two: ${sumOfCounts}`);
