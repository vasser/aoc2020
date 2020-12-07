const lib = require("../lib");

const rulesMap = lib.readFileToArray("./input.txt");

let numberOfBags = 0;

for (const rule of rulesMap) {
  if (rule === "") continue;

  const [outerBag, innerBags] = rule.split(" contain ");

  if (innerBags.match(/shiny gold/)) {
    console.log(outerBag, innerBags);
    numberOfBags++;
  }
}

console.log(numberOfBags);
