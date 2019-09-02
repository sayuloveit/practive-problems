// Maximum of Sliding Window: Given an array A and an integer K, find the maximum element in each sliding window of size K. For example:

// A = [4,6,5,2,4,7] and K = 3, windows are as follows:

// [4,6,5,2,4,7] : Max = 6
// [4,6,5,2,4,7] : Max = 6 
// [4,6,5,2,4,7] : Max = 5 
// [4,6,5,2,4,7] : Max = 7

// Output: 6,6,5,7

// O(N) time by using queue with max (2 queues)
// just looping here
function maximumOfSlidingWindows(nums, k) {
    let maxList = [];

    for (var i = 0; i <= nums.length - k; i++) {
        let max = 0;
        for (var j = i; j < i + k; j++) {
            if (max < nums[j]) max = nums[j];
        }

        // reset max
        maxList.push(max);
        max = 0;
    }

    return maxList;
}

console.log(maximumOfSlidingWindows([4,6,5,2,4,7], 3));