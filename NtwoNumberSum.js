// function twoNumberSum(array, targetSum) {
//   for (let index = 0; array.length; index++) {
//     if (array[index] + array[index++] == targetSum)
//       return [array[index], array[index++]];
//   }
// }

function twoNumberSum(array, targetSum) {
  let answer;
  for (let index = 0; index < array.length; index++) {
    let cond = array[index] + array[index + 1];
    if (cond === targetSum) {
      answer = [array[index], array[index + 1]];
      break;
    } else {
      answer = [];
    }
  }

  return answer;
}

// console.log(twoNumberSum(array, 5));

// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);

//   for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
//   }
// }

// Let's say we have an array: [1,2,3,4,5]
// Loop length of array times.
