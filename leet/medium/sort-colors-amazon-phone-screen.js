// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library’s sort function for this problem.

// Can you do this in a single pass?

// Example:
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

function sortColors(nums, k) {
    var l = 0;
    var m = 0;
    var r = nums.length - 1;

    while (m <= r) {
        let toMove = nums[m];

        if (toMove > k) {
            swap(nums, m, r);
            r--;
        } else if (toMove < k) {
            swap(nums, l, m);
            l++;
            m++;
        } else {
            m++;
        }
    }
}

function swap(arr, from, to) {
    let tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

var nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1];
sortColors(nums, 1);
console.log(nums);