const lib = require("../lib");

const commandsList = lib.readFileToArray("./input.txt").filter((r) => r !== "");

const steps = [];
let accum = 0;
let currentIndex = 0;

const executor = {
  acc(param) {
    accum += param;
    currentIndex += 1;
  },
  jmp(param) {
    currentIndex += param;
  },
  nop() {
    currentIndex += 1;
  },
};

while (!steps.includes(currentIndex)) {
  steps.push(currentIndex);

  const [command, param] = commandsList[currentIndex].split(" ");
  executor[command](parseInt(param));
}

console.log(`Part One: ${accum}`);
