function chunkArrayInGroups(arr, size) {
  let splitArr = [];
  while (arr.length > 0) {
    let sub = arr.slice(0, size);
    arr.splice(0, size);
    // console.log(sub,arr)
    splitArr.push(sub);
  }
  console.log(splitArr);
  return splitArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

function chunkArrayInGroups(arr, size) {
  let splitArr = [];
  for (let i = 0; i < arr.length; i += size) {
    splitArr.push(arr.slice(i, i + size));
  }
  return splitArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
