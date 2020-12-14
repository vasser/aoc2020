const lib = require("../lib");

const input = lib
  .readFileToArrayOfIntegers("./input.txt")
  .filter((l) => l !== "")
  .sort((a, b) => a - b);

const extendedInput = input.includes(0) ? [...input] : [...[0], ...input];

const oneJolt = [];
const threeJolt = [];

for (let i = 0; i < extendedInput.length; i++) {
  const joltage = extendedInput[i];
  for (const number of input) {
    if (number > joltage) {
      if (number - joltage === 1) {
        oneJolt.push(number);
      }
      if (number - joltage === 3) {
        threeJolt.push(number);
      }
      break;
    }
  }
}

console.log(`Part One: ${oneJolt.length * (threeJolt.length + 1)}`);
