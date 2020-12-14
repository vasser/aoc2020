const sequence = [
  0,
  1,
  2,
  3,
  6,
  7,
  8,
  9,
  12,
  15,
  16,
  17,
  18,
  21,
  24,
  25,
  26,
  27,
  30,
  33,
  34,
  37,
  38,
  39,
  42,
  45,
  46,
  47,
  50,
  51,
  52,
  55,
  56,
  57,
  58,
  59,
  62,
  63,
  64,
  65,
  66,
  69,
  70,
  71,
  72,
  75,
  76,
  77,
  78,
  81,
  82,
  83,
  84,
  85,
  88,
  89,
  90,
  91,
  92,
  95,
  96,
  97,
  98,
  99,
  102,
  103,
  104,
  105,
  108,
  109,
  110,
  111,
  114,
  115,
  116,
  117,
  120,
  123,
  124,
  127,
  130,
  131,
  134,
  135,
  136,
  137,
  138,
  141,
  144,
  147,
  148,
  149,
  150,
  153,
  156,
  159,
  162,
  163,
  164,
  165,
  168,
];

let uniqueSequences = 0;

function getSequences(startFrom = 0) {
  const seqLength = sequence.length;
  const lastSeqElement = sequence[seqLength - 1];
  const number = sequence[startFrom];

  for (let i = startFrom; i < seqLength; i++) {
    const nextNumber = sequence[i + 1];

    const diff = nextNumber - number;

    if (!nextNumber && nextNumber !== 0) {
      break;
    }

    if (diff <= 3) {
      getSequences(i + 1);
    } else {
      break;
    }
  }

  if (number === lastSeqElement) uniqueSequences++;

  return;
}

getSequences();

console.log(`Part Two: ${uniqueSequences}`);
