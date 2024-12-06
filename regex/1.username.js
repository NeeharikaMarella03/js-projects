let username = "dgfd4dsf4";
let userCheck = /^[A-Za-z](\d{2,}|[A-Za-z]+\d*)$/; // Change this line
// userCheck1 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i

// /^[a-z]([a-z]+\d*|\d\d+)$/i
let result = userCheck.test(username);
let resm = username.match(userCheck);
console.log(result, resm);
