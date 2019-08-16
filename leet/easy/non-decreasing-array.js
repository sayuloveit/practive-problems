// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var modCount = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            modCount++;
            if (modCount > 1) return false;
        }
    }

    return true;
};


console.log(checkPossibility([ ])); // true;
console.log(checkPossibility([ 2, 2 ])); // true;
console.log(checkPossibility([ 4, 2, 3 ])); // true make 4 -> 1
console.log(checkPossibility([ 4, 2, 1 ])); // false

console.log(checkPossibility([ 10, 5, 5, 56, 2 ])); // false
console.log(checkPossibility([ 10, 5, 56, 2 ])); // false

console.log(checkPossibility([3,4,2,3])); // false;