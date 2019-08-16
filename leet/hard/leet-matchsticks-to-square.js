// Remember the story of Little Match Girl? 
// By now, you know exactly what matchsticks the little match girl has, 
// please find out a way you can make one square by using up all those matchsticks. 
// You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Your input will be several matchsticks the girl has, represented with their stick length. 
// Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

// Example 1:
// Input: [1,1,2,2,2]
// Output: true

// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:
// Input: [3,3,3,3,4]
// Output: false

// Explanation: You cannot find a way to form a square with all the matchsticks.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    var sum = nums.reduce((acc, num) => (num + acc), 0)
    if (sum % 4 !== 0) return false;

    const side = sum / 4;

    let sideLengthSum = 0;
    let sideCount = 0;

    for (var i = 0; i < nums.length; i++) {
        if (sideCount > 4) return false;

    }

    return sideLengthSum === 0;
};

console.log(makesquare([ 1, 1, 2, 2, 2 ]));