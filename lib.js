const fs = require("fs");

const readFileToArrayOfIntegers = (fileName) =>
  fs
    .readFileSync(fileName)
    .toString()
    .split("\n")
    .map((item) => +item);

const readFileToArray = (fileName) =>
  fs.readFileSync(fileName).toString().split("\n");

exports.readFileToArrayOfIntegers = readFileToArrayOfIntegers;
exports.readFileToArray = readFileToArray;
