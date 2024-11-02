/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  //your code here
  rowMovesRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
  upLeft();
  upRight();
}

function toMove() {
  move();
  move();
}

function rowMovesRight() {
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
}

function rowMovesLeft() {
  move();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  toMove();
  putBeeper();
  move();
}

function moveRight() {
  rowMovesRight();
}

function toMoveUpLeft() {
  turnLeft();
  move();
  turnLeft();
}

function upLeft() {
  toMoveUpLeft();
  rowMovesLeft();
}

function toMoveUpRight() {
  turnRight();
  move();
  turnRight();
}

function upRight() {
  toMoveUpRight();
  rowMovesRight();
}
