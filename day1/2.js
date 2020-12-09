const lib = require("../lib");

const expenses = lib.readFileToArrayOfIntegers("./input.txt");

const desiredSum = 2020;
let result;

for (let i = 0; i < expenses.length; i++) {
  for (let j = 0; j < expenses.length; j++) {
    for (let k = 0; k < expenses.length; k++) {
      if (
        i !== j &&
        j !== k &&
        expenses[i] + expenses[j] + expenses[k] === desiredSum
      ) {
        result = expenses[i] * expenses[j] * +expenses[k];
        break;
      }
    }
  }

  if (result) {
    break;
  }
}

console.log(`Part One: ${result}`);
