function findMax(nums) {
    var left = 0;
    var right = nums.length - 1;

    var ans = -1;
    while (left < right) {
        var mid = left + Math.floor(((right - left) / 2));
        var prevMid = mid - 1;

        if (nums[prevMid] === undefined || nums[mid] < nums[prevMid]) {
            ans = nums[prevMid];
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

    return ans;
}

console.log(findMax([2,3,4,6,9,12,11,8,6,4,1])); // 12