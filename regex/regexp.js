console.log(numeral(1000).format("0a")); // 1k
console.log(numeral(1500000).format("0.0a")); // 1.5m

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

// [ '<h1>', '</h1>' ]
// .*?:

// .: Matches any single character (except a newline in most regex engines).
// *: Matches zero or more occurrences of the preceding character (. in this case).
// ?: Makes the * quantifier lazy, so it matches as few characters as possible while still satisfying the pattern.

//  The ^ character in regex allows you to anchor any specific string or pattern to the start of a line or string, not just a single letter. It ensures the regex engine looks for the exact string or pattern at the very beginning.

// Regex: ^abc\d+
// A string that starts with abc followed by one or more digits (\d+).

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
// You can search for the opposite of the \w with \W

/** 
// 
The key difference between the two regular expressions /[^0-9][A-Za-z]+\d*$/g and /^[A-Za-z]+\d*$/g lies in how they handle the placement and restrictions of digits in the string.

1. /[^0-9][A-Za-z]+\d*$/g:
[^0-9]: This means the first character must not be a digit. It doesn't restrict the position of digits elsewhere in the string, so digits can still appear after the first character or at the end.
[A-Za-z]+: This matches one or more alphabetic characters after the initial non-digit character.
\d*: This allows zero or more digits at the end of the string, but does not restrict digits between the alphabetic characters.
The issue here is that the first part ([^0-9]) only ensures that the string does not start with a digit, but it doesn't enforce the absence of digits between letters. As a result, the regex will still match strings that have digits in the middle, as long as the string starts with a non-digit and ends with letters followed by optional digits.

Example:

javascript
Copy code
let username = "ab1bb5";
let userCheck = /[^0-9][A-Za-z]+\d*$/g;
console.log(userCheck.test(username)); // true
This matches because the string starts with a letter (a), followed by some letters (b), and ends with digits (5), even though there are digits between the letters.

2. /^[A-Za-z]+\d*$/g:
^[A-Za-z]+: This means that the string must start with one or more alphabetic characters.
\d*$: After the alphabetic characters, it allows zero or more digits at the end, but no digits are allowed in between the letters.
Here, the key difference is that the pattern starts at the very beginning (^) and enforces that only alphabetic characters can appear at the start of the string, and if digits appear, they must only come after the alphabetic characters and not in between them.

Example:

javascript
Copy code
let username = "ab1bb5";
let userCheck = /^[A-Za-z]+\d*$/g;
console.log(userCheck.test(username)); // false
This doesn't match because the string has digits between the letters (ab1), which the regex does not allow.

Key Difference:
/[^0-9][A-Za-z]+\d*$/g only ensures that the first character is not a digit, but it still allows digits to appear between alphabetic characters. It matches strings like "ab1bb5" because the middle digits do not break the pattern.

/^[A-Za-z]+\d*$/g ensures that the string starts with only letters, and if digits appear, they must be at the end. This completely prohibits digits in the middle of the string, making it stricter about the positioning of digits.

*/

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }).

// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let res5 = favRegex.test(favWord);

// https://www.regextutorial.org/positive-and-negative-lookahead-assertions.php#:~:text=Positive%20lookahead%3A,it%20simply%20rejects%20that%20match.

//  lookahead is a type of assertion that allows you to match a pattern only if it is followed by another specific pattern, without including that following part in the match.

/**
Positive Lookahead: (?=...)
Matches if the specified pattern ... exists after the current position.
/ match (?=element) /

if element follows match then it will be a match otherwise match will technically not be a match and will not be declared as a match. 

* \$\d+(?=\sUSD)

Negative Lookahead: (?!...)
Matches if the specified pattern ... does not exist after the current position.

* \w+(?![,.!?])

 * 
 */

// ...................................................

// Quantifiers in regular expressions specify how many instances of a character, group, or character class must be present in the input for a match.
// Quantifiers are greedy by default, meaning they try to match as much as possible. Adding a ? after a quantifier makes it lazy, so it matches as little as possible.
// *(zero or more matches),+,?(zero or one match),{n},{n,},{,n},{n,m}

// ...................................................

// capture groups are used to find repeated substrings
// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.

//  he substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

// The ^ anchor ensures the entire string matches the pattern from start to end, and extra characters at the start or end cause the match to fail.
// Without ^, the pattern is more flexible, allowing the regex engine to find a match anywhere in the string, as long as it ends correctly with the specified pattern.

let repeatNum = "100 100 100";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let res6 = reRegex.test(repeatNum);

let resm = repeatNum.match(reRegex);
console.log(res6, resm);
