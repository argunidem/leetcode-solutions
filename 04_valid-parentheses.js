// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = function (s) {
  const stack = []; // Stack to store opening brackets

  const openingBrackets = ['(', '{', '[']; // Array of opening brackets
  const closingBrackets = [')', '}', ']']; // Array of corresponding closing brackets

  s.split('').forEach((char) => {
    if (openingBrackets.includes(char)) {
      stack.push(char); // Push opening bracket onto the stack
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(char)]; // Find the corresponding opening bracket

      // Check if the last opening bracket on the stack matches the current closing bracket
      stack[stack.length - 1] === matchingOpeningBracket
        ? stack.pop()
        : stack.push(char);
    }
  });

  return stack.length === 0; // If stack is empty, all brackets are properly closed
};
