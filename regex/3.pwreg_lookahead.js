let sampleWord = "8kjb8988";
let pwRegex = /\w(?=\w{5,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
let resm = sampleWord.match(pwRegex);
console.log(resm);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.s

// /(?=\w{6})(?=\w*\d{2})/
