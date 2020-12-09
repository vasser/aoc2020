const lib = require("../lib");

const commandsList = lib.readFileToArray("./input.txt").filter((r) => r !== "");

function runBootCode(
  commandsList,
  startFrom = 0,
  startAccum = 0,
  mutate = true
) {
  const steps = [];
  let accum = startAccum;
  let currentIndex = startFrom;
  const lastIndex = commandsList.length - 1;

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

  while (currentIndex <= lastIndex || !steps.includes(currentIndex)) {
    steps.push(currentIndex);

    let [command, param] = commandsList[currentIndex].split(" ");

    if (mutate && command === "nop") {
      const modifiedCommandsList = [...commandsList];
      modifiedCommandsList[currentIndex] = `jmp ${param}`;
      if (runBootCode(modifiedCommandsList, currentIndex, accum, false)) {
        break;
      }
    }

    if (mutate && command === "jmp") {
      const modifiedCommandsList = [...commandsList];
      modifiedCommandsList[currentIndex] = `nop ${param}`;

      if (runBootCode(modifiedCommandsList, currentIndex, accum, false)) {
        break;
      }
    }

    executor[command](parseInt(param));

    if (currentIndex > lastIndex) {
      console.log(`Part Two: ${accum}`);
      return true;
    }

    if (steps.includes(currentIndex)) {
      return false;
    }
  }
}

runBootCode(commandsList);
