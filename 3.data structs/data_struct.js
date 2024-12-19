// splice(): The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index.
// alters the original array

function htmlColorNames(arr) {
  // Only change code below this line
  let rem = arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// Copy Array Items Using slice()
// Rather than modifying an array, slice() copies or extracts a given number of elements to a new array,

// Check For The Presence of an Element With indexOf()
// indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

// users.hasOwnProperty('Alan');
// 'Alan' in users;

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  let lis = ["Alan", "Jeff", "Sarah", "Ryan"];
  return lis.every((prop) => userObj.hasOwnProperty(prop));
  // Only change code above this line
}

console.log(isEveryoneHere(users));

const userslis = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Only change code below this line
  let onlineCount = 0;
  for (const on in allUsers) {
    // console.log(on,allUsers[on].online)
    if (allUsers[on].online) {
      onlineCount++;
    }
  }
  return onlineCount;
  // Only change code above this line
}

console.log(countOnline(userslis));

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  let frndarr = userObj.data.friends;
  // console.log(frndarr)
  frndarr.push(friend);
  let arr = [...frndarr, friend];
  // Only change code above this line
  return frndarr;
}

console.log(addFriend(user, "Pete"));

// largest num in subarrs

function largestOfFour(arr) {
  return arr.map((subArr) => Math.max(...subArr));
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
// Output: [5, 27, 39, 1001]

// es2015 methods new releases

// .endsWith()
// .repeat()

// boo who

function booWho(bool) {
  // console.log(typeof([1,2,3]))
  if (bool) console.log("helloooo");
  if (bool || bool === true || bool === false) return true;
  return false;
}

console.log(booWho([1, 2, 3]));

// NaN (Not-a-Number) is a special value that represents an invalid or unrepresentable number.

// NaN is not equal to itself:
// NaN === NaN → false
// NaN is the only value in JavaScript that is not equal to itself. This is because it represents an invalid number, and two invalid values are not guaranteed to be "the same."

// Checking NaN in a condition:
// When you use if (NaN) or similar, it evaluates to false because NaN is a falsy value.

// Number.isNaN() (modern way):
// This method reliably checks if a value is NaN

// title case sentance

function titleCase(str) {
  // return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  return str
    .split(" ") // Split the string into words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
    .join(" "); // Join the words back together
}

// titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  // Create a new array by combining slices of arr2 with arr1
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // Output: [4, 1, 2, 3, 5, 6]

function frankenSplice(arr1, arr2, n) {
  // arr2.splice(n,0,...arr1)
  // console.log(arr2)
  let arr = [...arr2];
  arr.splice(n, 0, ...arr1);
  console.log(arr);
  return arr;
}
