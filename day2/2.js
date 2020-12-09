const lib = require("../lib");

const passwordsAndRules = lib.readFileToArray("./input.txt");

let validPasswords = 0;

for (let i = 0; i < passwordsAndRules.length; i++) {
  const entry = passwordsAndRules[i];
  if (!entry) {
    continue;
  }

  const [rule, password] = entry.split(":");
  const [positions, symbol] = rule.split(" ");
  const [firstPosition, secondPosition] = positions.split("-");

  const normalizedPassword = password.trim();

  const firstMatch = normalizedPassword[+firstPosition - 1] === symbol;
  const secondMatch = normalizedPassword[+secondPosition - 1] === symbol;

  if ((firstMatch || secondMatch) && !(firstMatch && secondMatch)) {
    validPasswords++;
  }
}

console.log(`Part Two: ${validPasswords}`);
