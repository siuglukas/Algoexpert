// Wrong aproach, read the task.

// function isValidSubsequence(array, sequence) {
//   if (array.length == 0 && sequence.length == 0) return true;
//   let valid;
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const isInlcuded = sequence.includes(element);
//     if (isInlcuded) {
//       valid = true;
//       break;
//     }
//   }
//   return valid;
// }
// let array = [5, 1, 22, 25, 6, -1, 8, 10];
// let sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];
// console.log(isValidSubsequence(array, sequence));
