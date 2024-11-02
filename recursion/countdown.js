// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    console.log(countArr);
    return countArr;
  }
  return;
}
// Only change code above this line

console.log(countdown(8));
