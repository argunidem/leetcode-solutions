// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

const lengthOfLastWord = function (s) {
  // Trim the string to remove leading and trailing spaces
  const trimmed = s.trim();
  // Split the trimmed string into an array of words
  const words = trimmed.split(' ');
  // Return the length of the last word
  return words[words.length - 1].length;
};
