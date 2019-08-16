// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < N and N % x == 0.
// Replacing the number N on the chalkboard with N - x.
// Also, if a player cannot make a move, they lose the game.

// Return True if and only if Alice wins the game, assuming both players play optimally.

 

// Example 1:

// Input: 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:

// Input: 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {

    var aliceWin = false;
    while(N > 1) {
        var gcd = findGcd(N);
        N = N - gcd;;
        aliceWin = !aliceWin;
    }
    
    return aliceWin;
};

var findGcd = function(num) {
    if (num <= 3) return 1; 
    for (var i = Math.floor(num / 2); i > 1; i--) {
        if (num % i === 0) return i;
    }

    return num;
}

console.log(divisorGame(2)); // true
console.log(divisorGame(3)); // false
console.log(divisorGame(4)); // true

console.log(divisorGame(2)); // true
console.log(divisorGame(3)); // false
console.log(divisorGame(4)); // true
console.log(divisorGame(6)); // true