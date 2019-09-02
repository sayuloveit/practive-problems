// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

var sortColors = function(nums) {
    var low = -1;
    var mid = -1;
    var high = nums.length;

    while (mid + 1 < high) {
        var toPlace = nums[mid + 1];

        if (toPlace < 1) {
            swap(nums, ++low, ++mid);
        } else if (toPlace > 1) {
            swap(nums, mid + 1, --high);
        } else {
            mid++;
        }
    }

    return nums;
};

function swap(nums, from, to) {
    var tmp = nums[from];
    nums[from] = nums[to];
    nums[to] = tmp;
}

console.log(sortColors([2,0,2,1,1,0,2,1,2,0,0,2,1]));