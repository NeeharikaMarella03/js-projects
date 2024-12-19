function filteredArray(arr, elem) {
  let copyArr = [...arr];
  // console.log(copyArr)
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i],arr[i].indexOf(elem))
    for (let j = 0; j < copyArr[i].length; j++) {
      let check = copyArr[i][j];
      let ind = arr[i].indexOf(elem);
      // console.log(check,ind)
      if (check === elem) {
        arr[i].splice(ind, 1);
      }
    }
    newArr.push(arr[i]);
  }
  return newArr;
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
