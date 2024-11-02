function checkScope() {
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

console.log(checkScope());

/**
 * Execution Context: When you declare a variable with let or const in a function, it gets assigned a memory location within that function's execution context. This memory location exists throughout the function's lifetime until the function completes.

 * Scopes Within the Function:
    When you use let within an inner block (like an if statement), a new block-scoped variable is created, and it temporarily "shadows" any variable of the same name in an outer scope. However, if you just reassign the variable without using let or const, then the outer variable is modified.
    Once the block finishes, any variables defined with let or const inside that block lose their reference. But if you didn't create a new variable in the block (i.e., you simply reassigned it), then the original reference from the outer scope is modified.

 * 
 */
