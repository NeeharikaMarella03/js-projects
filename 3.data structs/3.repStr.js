function repeatStringNumTimes(str, num) {
  if (num <= 0) return ""; // Return an empty string for negative or zero count
  let repStr = "";
  while (num > 0) {
    repStr += str;
    num--;
  }
  return repStr;
}

console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"
