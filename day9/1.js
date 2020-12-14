const lib = require("../lib");

const codes = lib
  .readFileToArrayOfIntegers("./input.txt")
  .filter((l) => l !== "");

const step = 25;
let numberWithoutPairs;

for (let i = step; i < codes.length; i++) {
  const number = codes[i];
  const preamble = codes.slice(i - step, i);

  let found = false;

  for (let j = 0; j < step; j++) {
    if (found) {
      break;
    }

    if (preamble[j] > number) {
      continue;
    }

    for (let k = 0; k < step; k++) {
      if (j === k || preamble[k] > number) {
        continue;
      }

      if (preamble[j] + preamble[k] === number) {
        found = true;
        break;
      }
    }
  }

  if (!found) {
    numberWithoutPairs = number;
    break;
  }
}

console.log(`Part One: ${numberWithoutPairs}`);

function countNumbers(start = 0) {
  let sum = 0;
  let numbers = [];

  for (let i = start; i < codes.length; i++) {
    if (codes[i] === numberWithoutPairs || sum >= numberWithoutPairs) {
      sum = 0;
      numbers = [];
      continue;
    }

    sum += codes[i];
    numbers.push(codes[i]);

    if (sum === numberWithoutPairs) {
      break;
    }
  }

  return sum === numberWithoutPairs ? numbers : false;
}

let contiguousSet;

for (let i = 0; i < codes.length; i++) {
  const isCount = countNumbers(i);
  if (isCount) {
    contiguousSet = isCount;
    break;
  }
}

const contiguousSetSorted = contiguousSet.sort((a, b) => a - b);

console.log(
  `Part Two: ${
    contiguousSetSorted[0] + contiguousSetSorted[contiguousSetSorted.length - 1]
  }`
);
