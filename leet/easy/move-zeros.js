// Given an array nums, write a function to move all 0's 
// to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var lastNonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            console.log('swapping', lastNonZeroIndex, i);
            swap(nums, lastNonZeroIndex, i);
            lastNonZeroIndex += 1;
            console.log(nums);
        }
    }  
};

var swap = function(arr, from, to) {
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

var arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);

