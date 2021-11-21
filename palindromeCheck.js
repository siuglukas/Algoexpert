function isPalindrome(string) {
  if (string.length == 1) return true;
  string = string.split("");
  let compareStr = "";
  for (let index = 1; index < string.length + 1; index++) {
    compareStr += string[string.length - index];
  }
  const bool = string.join("") == compareStr ? true : false;
  return bool;
}

console.log(isPalindrome("a"));
