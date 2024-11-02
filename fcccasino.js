let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
  }
  if (count > 0) return `${count} Bet`;
  else return `${count} Hold`;

  return "Change Me";
  // Only change code above this line
}

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(2),cc(3),cc(4),cc(5))
console.log(cc(2));
console.log(cc(3));

/**
 * Without break in a switch statement, once a case is matched, the code will continue executing all subsequent cases, regardless of whether their values match or not. This is called "fall-through." 
 * 
 * This way, the count is incremented or decremented correctly, depending on the card value, and doesn't continue to change due to the "fall-through" behavior.
 * Even if the card is 2, the count increases by 1 but immediately after, since there is no break, it continues and decrements the count because it reaches the part where cards like 10, J, etc., decrement count.

That’s why the break statement is so important—it prevents the code from continuing into the other cases after a match.
 * 
 */
