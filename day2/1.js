const lib = require("../lib");

const passwordsAndRules = lib.readFileToArray("./input.txt");

let validPasswords = 0;

for (let i = 0; i < passwordsAndRules.length; i++) {
  const entry = passwordsAndRules[i];
  if (!entry) {
    continue;
  }

  const [rule, password] = entry.split(":");
  const [range, symbol] = rule.split(" ");
  const [rangeMin, rangeMax] = range.split("-");

  const re = new RegExp(symbol, "g");
  const matches = (password.match(re) || []).length;
  if (rangeMin <= matches && matches <= rangeMax) {
    validPasswords++;
  }
}

console.log(`Part One: ${validPasswords}`);
