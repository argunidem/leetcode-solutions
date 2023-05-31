// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary = (a, b) => {
  let result = ''; // Stores the result of binary addition
  let carry = 0; // Keeps track of the carry during addition
  let i = a.length - 1; // Pointer for string 'a'
  let j = b.length - 1; // Pointer for string 'b'

  while (i >= 0 || j >= 0 || carry > 0) {
    // Iterate until all digits of 'a', 'b', and carry are processed

    // Get the current digits from 'a' and 'b' (or '0' if digits are exhausted)
    const digitA = parseInt(a[i] || '0');
    const digitB = parseInt(b[j] || '0');

    // Calculate the sum of current digits and the carry
    const sum = digitA + digitB + carry;

    // Append the least significant bit of the sum to the result
    result = (sum % 2) + result;

    // Calculate the new carry for the next iteration
    carry = Math.floor(sum / 2);

    // Move the pointers to the next digits in 'a' and 'b'
    i--;
    j--;
  }

  return result;
};
