function firstNonRepeatingCharacter(string) {
  if (!string) return -1;
  let charCount = {};

  let result = "";

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (!charCount.hasOwnProperty(element)) {
      charCount[element] = 0;
      continue;
    }
    charCount[element] += 1;
  }

  for (let index = 0; index < string.length; index++) {
    const charKey = string[index];
    const charValue = charCount[charKey];

    if (charValue === 0) {
      result = index;
      break;
    } else {
      result = -1;
    }
  }

  return result;
}

console.log(firstNonRepeatingCharacter("aabc"));
