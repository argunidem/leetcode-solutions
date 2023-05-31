// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Solution 1
const plusOne = function (digits) {
  const n = digits.length;

  // Iterate through the digits from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Increment the current digit by 1
    digits[i]++;

    // Check if there is a carry
    if (digits[i] < 10) {
      // No carry, return the updated digits
      return digits;
    }

    // There is a carry, set the current digit to 0 and continue to the next digit
    digits[i] = 0;
  }

  // If we reach this point, it means all digits were 9's with a carry
  // Add an additional digit 1 at the front
  digits.unshift(1);

  return digits;
};

// Solution 2
const plusOne2 = function (digits) {
  return digits
    .reduceRight((acc, digit) => {
      if (digit !== 9) {
        acc.push(digit + 1);
      } else {
        acc.push(0);
      }
      return acc;
    }, [])
    .reverse();
};
