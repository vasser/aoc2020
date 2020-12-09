const lib = require("../lib");

const tickets = lib.readFileToArray("./input.txt");

const rows = 128;
const columns = 8;

let rowsRange;
let columnsRange;

const seatsMap = [];

function resetRanges() {
  rowsRange = [0, rows - 1];
  columnsRange = [0, columns - 1];
}

function handleRows(rowsMarkers) {
  for (const marker of rowsMarkers) {
    const half = Math.floor(rowsRange[1] - (rowsRange[1] - rowsRange[0]) / 2);
    if (marker === "F") {
      rowsRange = [rowsRange[0], half];
    } else if (marker === "B") {
      rowsRange = [half + 1, rowsRange[1]];
    }
  }
}

function handleColumns(colsMarkers) {
  for (const marker of colsMarkers) {
    const half = Math.floor(
      columnsRange[1] - (columnsRange[1] - columnsRange[0]) / 2
    );
    if (marker === "L") {
      columnsRange = [columnsRange[0], half];
    } else if (marker === "R") {
      columnsRange = [half + 1, columnsRange[1]];
    }
  }
}

for (const ticket of tickets) {
  if (ticket === "") continue;

  resetRanges();

  const rowsMarkers = ticket.slice(0, 7);
  const columnsMarkers = ticket.slice(7);

  handleRows(rowsMarkers);
  handleColumns(columnsMarkers);

  seatsMap.push(rowsRange[0] * columns + columnsRange[0]);
}

const seatsMapSorted = seatsMap.sort((a, b) => a - b);
console.log(`Part One: ${seatsMapSorted[seatsMapSorted.length - 1]}`);

const ticketsBackfill = [];

for (
  let i = seatsMapSorted[0];
  i <= seatsMapSorted[seatsMapSorted.length - 1];
  i++
) {
  ticketsBackfill.push(i);
}

for (let i = 0; i < ticketsBackfill.length; i++) {
  if (seatsMapSorted[i] !== ticketsBackfill[i]) {
    console.log(`Part Two: ${ticketsBackfill[i]}`);
    break;
  }
}
