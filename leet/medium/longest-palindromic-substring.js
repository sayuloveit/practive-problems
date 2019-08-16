// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if (s.length === 1) return s;
 
    var maxLength = 0; 
    var maxPalidrome = '';
    for (var i = 0; i < s.length - 1; i++) {
        var oddPalidrome = findPaildrome(s, i, i);
        var evenPalidrome = findPaildrome(s, i, i + 1);

        if (oddPalidrome.length > maxLength) {
            maxPalidrome = oddPalidrome;
            maxLength = oddPalidrome.length;
        }

        if (evenPalidrome.length > maxLength) {
            maxPalidrome = evenPalidrome;
            maxLength = evenPalidrome.length;
        }

    }
    
    return maxPalidrome;
};

function findPaildrome(s, start, end) {
    while(start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }

    return s.substring(start + 1, end);
}

console.log(longestPalindrome('baba')); // 'bad' || 'aba'
console.log(longestPalindrome('b')); // 'b'
console.log(longestPalindrome('aa')); // 'b'
console.log(longestPalindrome('cbbd')); // 'bb'