// Coin Change Problem: Given a set of coin denominations, 
// print out the different waysyou can make a target amount. 
// You can use as many coins of each denomination as you like.For example: 
// If coins are [1,2,5] and the target is 5, output will be:
// [1,1,1,1,1][1,1,1,2][1,2,2][5]

function coinChange(coins, sum) {
    var res = [];
    coinChangeHelper(coins, [], 0, sum, 0, res);
    return res;
}

function coinChangeHelper(coins, coinsSoFar, currentSum, targetSum, startIndex, results) {
    if (currentSum > targetSum) return;

    if (currentSum === targetSum) {
        results.push([].concat(coinsSoFar));
        return;
    }

    for (var i = startIndex; i < coins.length; i++) {
        var change = coins[i];
        // add in change
        coinsSoFar.push(change);
        coinChangeHelper(coins, coinsSoFar, currentSum + change, targetSum, i, results);
        // remove added change
        coinsSoFar.pop();
    }
}

console.log(coinChange([1, 2, 5], 5));