function getIndexToIns(arr, num) {
  return arr.filter((val) => val < num).length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5)); // Output: 2

function getIndexToIns(arr, num) {
  let ind = 0;
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 5,3,20,3
    let elem = arr[i]; //5
    for (let j = i + 1; j < arr.length; j++) {
      //3,20,3 i=3
      if (elem > arr[j]) {
        // 5>3 3>
        let temp = elem; // temp =5
        elem = arr[j]; // elem =3
        arr[j] = temp; // arr[1]=5
        console.log(elem, temp, arr[j], j);
      }
    }
    sortedArr.push(elem);
  }
  console.log(sortedArr);
  for (let k = 0; k < sortedArr.length; k++) {
    if (num > sortedArr[k]) {
      ind += 1;
    }
  }
  console.log(ind);
  return ind;
}
getIndexToIns([5, 3, 20, 3], 5);

// bubble sort

function getIndexToIns(arr, num) {
  // Perform optimized Bubble Sort
  for (let i = 0; i < arr.length; i++) {
    let swapped = false; // Track if any swaps are made in this pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true; // Mark that a swap occurred
      }
    }

    // If no swaps were made, the array is sorted; exit the loop
    if (!swapped) break;
  }

  // Find the index where `num` should be inserted
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      index++;
    } else {
      break;
    }
  }

  return index;
}

// Test the function
console.log(getIndexToIns([5, 3, 20, 3], 5)); // Output: 2
