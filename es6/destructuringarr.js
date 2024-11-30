// Extracts values into individual variables ,Can skip values using commas,
//  Use Destructuring when you want to pick specific elements and assign them to variables by their position in the array.
// The spread operator "spreads" or expands an array or object into individual elements or properties.Use Spread when you want to duplicate an array, merge arrays, or pass an array as individual arguments.
// The rest operator gathers or "collects" multiple elements into an array or object. It’s used in situations where you want to handle an indefinite number of values and group them together.The rest element only works correctly as the last variable in the list.

const arr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// destructuring in function params

// When you destructure directly in the function parameters, JavaScript automatically unpacks the properties from the object passed into the function. In this case, JavaScript matches the max and min keys of the stats object to the max and min variables specified in the function’s parameter list.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => {
  // let {max,min} = stats;
  // console.log(max,min)
  return (max + min) / 2.0;
};
// Only change code above this line
console.log(half(stats));
