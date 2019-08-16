// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
// Note: Length of the array will not exceed 10,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var low = 0;
    var high = 1;
    var res = 0;

    for (var i = 0; i < nums.length; i++) {
        // if next one smaller or at the end of array
        if (nums[i + 1] <= nums[i] || nums[i + 1] == undefined) {
            var streak = high - low;
            res = res < streak ? streak : res;
            low = i;
            high = i + 1
        } else {
            high++;
        }
    }

    return res;
};

console.log(findLengthOfLCIS([1,3,5,4,7])); // 3
console.log(findLengthOfLCIS([2,2,2,2,2])); // 1
console.log(findLengthOfLCIS([2,2,2,2,2,1,3,5,4,7])); // 3
console.log(findLengthOfLCIS([1,3,5,7])); // 4
console.log(findLengthOfLCIS([])); // 0

