function bouncer(arr) {
  let trueArr = [...arr];
  let i = arr.length - 1;
  // let i = 0
  while (i >= 0) {
    if (!arr[i]) {
      console.log(trueArr.splice(i, 1), i);
      // console.log(i,trueArr[i])
    }
    i--;
  }
  console.log(trueArr);
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter((value) => Boolean(value));
}
