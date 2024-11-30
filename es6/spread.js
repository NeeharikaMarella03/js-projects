//  returns an unpacked array it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal.

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
