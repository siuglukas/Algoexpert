// My solution:

// Pseudo code:
// Create hash table with character count from string
// Create has table with chracater count from document

// Loop through the characters || the hash table. and determine if the amount of characters are equal.

// let characters = "Bste!hetsi ogEAxpelrt x ";
// let document = "AlgoExpert is the Best!";

// let characters = "A";
// let document = "a";

// function generateDocument(characters, document) {
//   if (document.length == 0) return true;
//   let characterCount = {};
//   let documentCount = {};

//   // Populate characterCount hash table.
//   for (char of characters) {
//     if (!characterCount[char]) {
//       characterCount[char] = 1;
//       continue;
//     }
//     characterCount[char] += 1;
//   }

//   // Populate documentCount hash table.
//   for (char of document) {
//     if (!documentCount[char]) {
//       documentCount[char] = 1;
//       continue;
//     }
//     documentCount[char] += 1;
//   }

//   // Compare two hash tables.
//   for (char of document) {
//     const charTableValue = characterCount[char];
//     const documentTableValue = documentCount[char];
//     console.log(char, charTableValue, "char table value");
//     console.log(char, documentTableValue, "document table");
//     if (charTableValue < documentTableValue || !charTableValue) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(generateDocument(characters, document));

// AlgoExpert solution from a hint:

// let characters = "Bste!hetsi ogEAxpelrt x ";
// let document = "AlgoExpert is the Best!";

let characters = "A";
let document = "a";

function generateDocument(characters, document) {
  if (document.length == 0) return true;
  const charTable = {};

  for (char of characters) {
    if (!charTable[char]) {
      charTable[char] = 1;
      continue;
    }

    charTable[char] += 1; // If it's already there, increment it.
  }

  for (char of document) {
    if (!charTable[char]) return false;
    charTable[char] = charTable[char] - 1;
    if (charTable[char] < 0) return false;
  }

  return true;
}

console.log(generateDocument(characters, document));
