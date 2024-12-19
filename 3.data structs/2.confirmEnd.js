function confirmEnding(str, target) {
  let targetStart = str.length - target.length;
  let targetEnd = str.length + target.length - 1;
  let match = str.slice(targetStart, targetEnd);
  console.log(match);
  if (match === target) return true;
  else return false;
}

confirmEnding("Congratulation", "on");
