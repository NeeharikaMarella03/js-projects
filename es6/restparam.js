const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

function rum(...els) {
  // const a = [1,2,3,4]
  return els.reduce((i, sum = 0) => (sum += i));
}
console.log(sum(3, 2, 4));

console.log(rum(1, 2, 3));
