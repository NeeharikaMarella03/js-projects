//  /: Delimiters used to enclose the regex pattern (common in some programming languages like JavaScript).

// Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

// 1. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

// You can search for multiple patterns using the alternation or OR operator: |.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// flag that ignores case - the i flag.

// You can also extract the actual matches you found with the .match() method.

"string".match(/regex/);
/regex/.test("string");

// To search or extract a pattern more than once, you can use the global search flag: g.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let res = twinkleStar.match(starRegex);

// The wildcard character . will match any one character. The wildcard is also called dot and period. match exactly one of any character (except a newline by default).

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let res1 = unRegex.test(exampleStr);

//  Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// Inside a character set, you can define a range of characters to match using a hyphen character: -  to match lowercase letters a through e you would use [a-e].

// negated character sets are the one that are created not to match(^)

// Create a single regex that matches all characters that are not a number or a vowel.
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let res3 = quoteSample.match(myRegex); // Change this line

console.log(res3);

//The + in regular expressions (regex) is a quantifier that matches one or more occurrences of the preceding character or group . when u need to match chars that occur more than once (atleast once) .use +, check if it is present consecutively
// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

// Regex: [a-zA-Z]+
// Matches: "abc", "Hello", "Python", etc. (one or more letters).

// * that matches characters that occur zero or more times. a quantifier that matches zero or more occurrences of the preceding character or group. It allows for flexible matching where the pattern can occur any number of times, including not at all.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

let text = "<h1>Winter is coming</h1>";
let myRegexp = /<.*?>/g; // Change this line
let res4 = text.match(myRegexp);
console.log(res4);

// .*?:

// .: Matches any single character (except a newline in most regex engines).
// *: Matches zero or more occurrences of the preceding character (. in this case).
// ?: Makes the * quantifier lazy, so it matches as few characters as possible while still satisfying the pattern.

//  The ^ character in regex allows you to anchor any specific string or pattern to the start of a line or string, not just a single letter. It ensures the regex engine looks for the exact string or pattern at the very beginning.

// Regex: ^abc\d+
// A string that starts with abc followed by one or more digits (\d+).

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
// You can search for the opposite of the \w with \W
