let string = "lukas";

function a() {
  for (char of string) {
    if (char == "s") {
      return 50;
    }

    console.log("yra");
  }

  return 60;
}

let result = a();
console.log(result);

// let obj = {
//   a: undefined,
// };
// console.log((obj.a = obj.a - 1));
// console.log(!obj.a);
