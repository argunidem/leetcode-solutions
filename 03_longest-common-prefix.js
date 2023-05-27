// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = function (strs) {
  // Check if the input array is empty
  if (strs.length === 0) {
    return '';
  }

  // Initialize the common prefix with the first string in the array
  let prefix = strs[0];

  // Iterate over the remaining strings in the array
  for (let i = 1; i < strs.length; i++) {
    // Check if the current string does not start with the common prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Reduce the common prefix by one character at a time
      prefix = prefix.slice(0, prefix.length - 1);

      // If the common prefix becomes empty, return an empty string
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
};
