// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
//
// Binary Search
const searchInsert = function (nums, target) {
  let left = 0; // Initialize left pointer
  let right = nums.length - 1; // Initialize right pointer

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate middle index

    if (nums[mid] === target) {
      return mid; // Target found, return middle index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is greater, search in the right half
    } else {
      right = mid - 1; // Target is smaller, search in the left half
    }
  }

  return left; // Target not found, return the index where it should be inserted
};

// findIndex method
const searchInsert2 = function (nums, target) {
  const index = nums.findIndex((num) => num >= target); // Find the index where the first element greater than or equal to target is found

  return index === -1 ? nums.length : index; // Return the index or the length of the array if no element is found
};
