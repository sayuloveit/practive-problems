// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
// and this is the only possible move.  The result of this move is that the string is "aaca", 
// of which only "aa" is possible, so the final string is "ca".

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {

    var haveDup = true;
    
    while (haveDup && S.length) {
        var deleteCount = 0;
        for (var i = 0; i < S.length - 1; i++) {
            if (S[i] === S[i+1]) {
                S = S.slice(0, i) + S.slice(i + 2)
                deleteCount++;
            }
        }

        haveDup = deleteCount > 0;
    }

    return S;
};

console.log(removeDuplicates('abbaca')); // ca
console.log(removeDuplicates('a'));      // a
console.log(removeDuplicates('aa'));     // ''