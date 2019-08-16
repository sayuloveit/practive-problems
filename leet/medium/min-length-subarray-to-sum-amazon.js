// Given an array of n positive integers and a positive integer s, 
// find the minimal length of a contiguous subarray of which the sum ≥ s. 
// If there isn't one, return 0 instead.

// Example:
// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2

// Input: s = 7, nums = [2,3,4,2,1,3]
// Output: 2

// two pointers
// keep track of current sum
// iterate over array, add to sum,
// set high pointer to place in array
// if sum at n or over, record length
    // increase lower pointer until sum less than n

function minSubArrayLengh(nums, n) {
    var start = 0;
    var end = 0;
    var sumSoFar = 0;
    var minSoFar = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < nums.length; i++) {
        num = nums[i];
        end = i;
        sumSoFar += num;

        while (sumSoFar >= n && start <= end) {
            minSoFar = Math.min(minSoFar, end - start + 1);
            sumSoFar -= nums[start];
            start++;
        }

    }

    return minSoFar === Number.MAX_SAFE_INTEGER ? 0 : minSoFar;
}

console.log(minSubArrayLengh([2,3,4,2,1,3], 7)); // 2
console.log(minSubArrayLengh([2,3,1,2,3,4], 7)); // 2
console.log(minSubArrayLengh([2,8,1,2,3], 7)); // 1
console.log(minSubArrayLengh([1, 4, 45, 6 ], 51)); // 2
console.log(minSubArrayLengh([4, 8, 1], 9)); // 2
console.log(minSubArrayLengh([8, 8, 1], 7)); // 1