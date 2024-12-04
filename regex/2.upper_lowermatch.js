let ohStr = "Oh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
let resm = ohStr.match(ohRegex);
console.log(result, resm);
