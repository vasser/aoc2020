const lib = require("../lib");

const expenses = lib.readFileToArrayOfIntegers("./input.txt");

const desiredSum = 2020;
let result;

for (let i = 0; i < expenses.length; i++) {
  for (let j = 0; j < expenses.length; j++) {
    if (i !== j && expenses[i] + expenses[j] === desiredSum) {
      result = expenses[i] * expenses[j];
      break;
    }
  }

  if (result) {
    break;
  }
}

console.log(result);
