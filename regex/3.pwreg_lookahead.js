let sampleWord = "8kjb8988";
let pwRegex = /\w(?=\w{5,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
let resm = sampleWord.match(pwRegex);
console.log(resm);

// /\w(?=.*[a-z]{2,})(?=.*\d{2,})/

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.s

// /(?=\w{6})(?=\w*\d{2})/

// let pwRegex = /^(?=.*[a-zA-Z])(?=.*\d{2,}).{5,}$/; // Change this line

// For example, ^(?=.*[a-zA-Z])(?=.*\d{2}) ensures that both (lookaheads must match):
// At least one alphabet exists anywhere in the string.
// At least two digits (consecutive or not) exist anywhere in the string.
// """" Both conditions must be true for the string to match, as the lookaheads work together logically (like an AND operator""""").
