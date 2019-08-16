// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:

// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (cache[n]) return cache[n];

    if (n <= 3) return n;

    const biggestSqRoot = Math.floor(Math.sqrt(n));

    var best = Infinity;

    for (var i = 1; i <= biggestSqRoot; i++) {
        var m = i * i;
        best = Math.min(best, 1 + numSquares(n - m));
    }

    cache[n] = best;
    return best;
};

var cache = {};

console.log(numSquares(13)); // 2
console.log(numSquares(6));  // 3