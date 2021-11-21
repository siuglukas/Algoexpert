// O(n^2 solution)
function sortedSquaredArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let numSquared = array[index] * array[index];
    newArray.push(numSquared);
  }

  return newArray.sort(function (a, b) {
    return a - b;
  });
}

const array = [-2, -4];

console.log(sortedSquaredArray(array));
