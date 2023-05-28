// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = function (s) {
  // Maximum length of the substring
  let maxLength = 0;
  // Start index of the current substring
  let start = 0;
  // Map to store the last seen index of each character
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charMap.has(currentChar)) {
      // If the current character is already in the substring,
      // move the start index to the right of the last occurrence of the character
      start = Math.max(start, charMap.get(currentChar) + 1);
    }

    // Update the maximum length if the current substring is longer
    // console.log(end, start);
    maxLength = Math.max(maxLength, end - start + 1);

    // Store the current index of the character in the map
    charMap.set(currentChar, end);
  }

  return maxLength;
};
