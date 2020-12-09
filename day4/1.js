const lib = require("../lib");

const passports = lib.readFileToArray("./input.txt");

let passportData = [];
let validPassports = 0;

const validateFields = {
  byr(value) {
    return !!(value >= 1920 && value <= 2002);
  },
  iyr(value) {
    return !!(value >= 2010 && value <= 2020);
  },
  eyr(value) {
    return !!(value >= 2020 && value <= 2030);
  },
  hgt(value) {
    const height = parseInt(value);

    if (value.endsWith("cm")) {
      return !!(height >= 150 && height <= 193);
    }

    if (value.endsWith("in")) {
      return !!(height >= 59 && height <= 76);
    }

    return false;
  },
  hcl(value) {
    return !!value.match(/^#[0-9abcdef]{6}$/);
  },
  ecl(value) {
    return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);
  },
  pid(value) {
    return !!value.match(/^[0-9]{9}$/);
  },
  cid(value) {
    return !!value;
  },
};

function isValidPassport(passportFields) {
  for (let i = 0; i < passportFields.length; i++) {
    const [field, value] = passportFields[i].split(":");
    if (!validateFields[field](value)) return false;
  }
  return true;
}

function handlePassport() {
  const passportFields = passportData.join(" ").split(" ");
  const fields = passportFields.map((field) => field.split(":")[0]);

  if (
    (fields.length === 8 || (fields.length === 7 && !fields.includes("cid"))) &&
    isValidPassport(passportFields)
  ) {
    validPassports++;
  }
}

for (let indexRow = 0; indexRow < passports.length; indexRow++) {
  if (passports[indexRow].length === 0) {
    handlePassport();
    passportData = [];
  } else {
    passportData.push(passports[indexRow]);
  }
}

console.log(`Part Two: ${validPassports}`);
