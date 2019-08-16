// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function(nums) {
    if (!nums) {
        return;
    }

    var map = {};
    var extras = [];

    nums.forEach(num => {
        map[num] ? extras.push(num) : map[num] = 1; 
    });

    return extras;
}

// console.log(findDuplicates([4,3,2,7,8,2,3,1]));


// Given an array of integers nums sorted in ascending order, 
// find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].
// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


// use binary search to find index of the target, 
// then expand from that index to find range

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var searchIndex;
    while (start <= end) {
        var mid = Math.ceil(start + ((end - start) / 2));
        if (nums[mid] === target) {
            searchIndex = mid;
            break;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (searchIndex !== undefined) {
        var startPos = searchIndex;
        var endPos = searchIndex;
        while (nums[startPos] !== undefined && nums[startPos - 1] === target) {
            startPos--;
        }

        while (nums[endPos] !== undefined && nums[endPos + 1] === target) {
            endPos++;
        }

        return [ startPos, endPos ];
    } else {
        return [ -1, -1 ];
    }
};

console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1, -1]
console.log(searchRange([1], 1)); // [0, 0]
console.log(searchRange([1, 3], 1)); // [0, 0]