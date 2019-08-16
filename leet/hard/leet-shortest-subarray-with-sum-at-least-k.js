// Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

// If there is no non-empty subarray with sum at least K, return -1.

 

// Example 1:

// Input: A = [1], K = 1
// Output: 1
// Example 2:

// Input: A = [1,2], K = 4
// Output: -1
// Example 3:

// Input: A = [2,-1,2], K = 3
// Output: 3
 

// Note:

// 1 <= A.length <= 50000
// -10 ^ 5 <= A[i] <= 10 ^ 5
// 1 <= K <= 10 ^ 9

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    var res = Number.MAX_SAFE_INTEGER;

    var sumsArray = [ 0 ];
    A.forEach(a => {
        sumsArray.push(sumsArray[sumsArray.length - 1] + a)
    });

    var queue = [];

    for (var i = 0; i < sumsArray.length; i++) {
        if (queue.length === 0) {
            queue.push(i);
        } else {
            while (queue.length && sumsArray[queue[queue.length - 1]] > sumsArray[i]) {
                queue.pop();
            }

            while (queue.length && sumsArray[queue[0]] <= sumsArray[i] - K) {
                res = Math.min(res, i - queue[0]);
                queue.shift();
            }
            queue.push(i);
        }

    }


    return res < Number.MAX_SAFE_INTEGER ? res : -1;
};

console.log(shortestSubarray([1], 1)); // 1
console.log(shortestSubarray([1, 2], 4)); // -1
console.log(shortestSubarray([2, -1, 2], 3)); // 3
console.log(shortestSubarray([1, 1, 5, 5, 10], 20)); // 3
console.log(shortestSubarray([48,99,37,4,-31], 140)); // 2
