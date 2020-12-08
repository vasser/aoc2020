const lib = require("../lib");

const rulesMap = lib.readFileToArray("./input.txt").filter(r => r !== '' && !r.includes('no other bags'));

const desiredColor = 'shiny gold';
const colors = new Set()

function getColor(str) {
  return str.replace('bags', '').trim()
}

function searchForColor(rules, color) {
  for (let i = 0; i < rules.length; i++) {
    const [outerBag, innerBags] = rules[i].split(" contain ");
    const outerColor = getColor(outerBag);

    if (colors.has(outerColor)) continue

    if (innerBags.includes(color)) {
      colors.add(outerColor)
      searchForColor(rules, outerColor)
    }
  }
}

searchForColor(rulesMap, desiredColor);

console.log(colors.size)
