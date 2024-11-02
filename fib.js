function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:

  //   var output = [];
  //   if(n===1){
  //     output = [0];
  //   }
  //   else if(n===2){
  //     output = [0,1];
  //   }else{
  //     output = [0,1];
  //     for(var i=2;i<n;i++){
  //         var len = output.length
  //         output.push(output[len-2]+output[len-1])
  //     }
  //     return output
  //   }

  console.log(n);
  var items = 1;
  var seqArr = [0, 1];
  if (n === 0) {
    seqArr = [0];
  } else {
    // var sum = 1
    while (items < n - 1) {
      sum = seqArr[items - 1] + seqArr[items];
      seqArr.push(sum);
      items++;
    }
  }
  console.log(seqArr);
  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

fibonacciGenerator(0);
