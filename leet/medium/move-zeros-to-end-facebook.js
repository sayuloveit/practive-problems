// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(nums) {
    var lastZeroIndex = 0;

    nums.forEach((num, index) => {
        if (num > 0) {
            swap(nums, lastZeroIndex, index);
            lastZeroIndex++;
        }
    });

    return nums;
}

function swap(nums, from, to) {
    var tmp = nums[from];
    nums[from] = nums[to];
    nums[to] = tmp;
}

console.log(moveZeros([0,1,0,3,12]));