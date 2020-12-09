const lib = require("../lib");

const answersList = lib.readFileToArray("./input.txt");

let answersSet = new Set();

function union(setA, setB) {
  const unionSet = new Set(setA);
  for (const elem of setB) {
    unionSet.add(elem);
  }
  return unionSet;
}

let sumOfCounts = 0;

for (let i = 0; i < answersList.length; i++) {
  if (answersList[i].length === 0) {
    sumOfCounts += answersSet.size;
    answersSet = new Set();
  } else {
    answersSet = union(answersSet, new Set(answersList[i].split("")));
  }
}

console.log(sumOfCounts);
