// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = function (x) {
  // Check for negative numbers or numbers ending with 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0; // Store the reversed version of the number
  let original = x; // Store the original value of x

  // Reverse the number
  while (x > 0) {
    reversed = reversed * 10 + (x % 10); // Add the last digit to reversed
    x = Math.floor(x / 10); // Remove the last digit from x
  }

  // Check if the reversed number is equal to the original number
  return reversed === original;
};
