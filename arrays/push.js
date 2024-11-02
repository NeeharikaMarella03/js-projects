console.log("Try programiz.pro");

const arr1 = [1, 2];
const arr2 = [3, 4, 5, 6, 7];
// let out = arr1.push(arr2)
// console.log(arr1,out)
arr1.push(arr2);
console.log(arr1, arr1.push(arr2));

var myConcat = (arr1, arr2) => arr1.push(arr2);

console.log(myConcat([1, 2], [3, 4, 5]), arr1);
