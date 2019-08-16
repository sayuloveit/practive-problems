// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the number of combinations that make up that amount. 
// You may assume that you have infinite number of each kind of coin.

 

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10] 
// Output: 1

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    return count(coins, coins.length, amount);
};

var count = function(S, m , n) {
    // If n is 0 then there is 1 
    // solution (do not include any coin) 
    if (n === 0) return 1;
    
    // If n is less than 0 then no 
    // solution exists 
    if (n < 0) return 0;

    // If there are no coins and n 
    // is greater than 0, then no 
    // solution exist 
    if (m <= 0 && n >= 1) return 0;

    return count(S, m - 1, n) + count(S, m, n - S[m - 1]);

}

console.log(change(5, [ 1, 2, 5 ]));;
console.log(change(500, [3,5,7,8,9,10,11]));;