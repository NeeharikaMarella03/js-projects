/* function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let matchCountArr = new Array(str1.length).fill(0);
  // console.log(matchCountArr)
  if (str1 === str2) return true;
  // else if(str1.length < str2.length) return false
  else {
    for (let i = 0; i < str1.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          matchCount++;
        }
      }
      matchCountArr[i] = matchCount;
    }
  }
  // console.log(matchCountArr)
  // let comCount = 0
  // let flag = 0
  // for(let i=0; i<matchCountArr.length; i++){
  //   if(matchCountArr[i] >= 1){
  //     comCount++
  //     flag+=matchCountArr[i]
  //     // flag = false
  //   }
  // }
  // console.log(flag)
  // if(comCount === str2.length) return true;
  // return false
}

console.log(mutation(["floor", "for"]));

*/

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let matchCountArr = new Array(str1.length).fill(0);
  // let matchCountArr = []
  console.log(matchCountArr);
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
      // console.log(str2[i])
      return false;
    }
  }
  return true;

  for (let i = 0; i < str2.length; i++) {
    let count = 0;
    for (let j = 0; j < str1.length; j++) {
      if (str1[j] === str2[i]) {
        count = 1;
      }
    }
    matchCountArr[i] = count;
    if (count === 0) return false;
  }
  return true;

  console.log(matchCountArr);
  return arr;
}

console.log(mutation(["Noel", "Ole"]));
