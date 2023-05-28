// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Solution 1

const twoSum = function (nums, target) {
  const map = new Map(); // Create a new map to store values and their indices

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement value
    const complement = target - nums[i];

    // Check if complement value exists in the map
    if (map.has(complement)) {
      // Return the indices of the two numbers that add up to the target
      return [map.get(complement), i];
    }

    // Add the current number and its index to the Map
    map.set(nums[i], i);
  }

  // If no solution is found, return an empty array
  return [];
};

// Solution 2

const twoSum2 = function (nums, target) {
  const result = [];

  // Iterate over each number in the array
  nums.forEach((number, index) => {
    // Calculate the complement value
    const complement = target - number;

    // Find the index of the complement number
    nums.find((num, i) => {
      if (i !== index && num === complement) {
        // Check if the current number is not the same as the number at the current index
        // and if it is equal to the complement
        // If both conditions are true, we have found a pair of numbers that add up to the target
        result.unshift(i);
      }
    });
  });

  return result;
};
