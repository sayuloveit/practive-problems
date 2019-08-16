// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false'

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length || A === '' || B == '') return false;

    if (A.length === 2) return A[0] === B[1] && B[0] === A[1];
    
    var diffCount = 0;
    var diff = [];
    var start = 0;
    var end = A.length - 1;

    while (start < end) {
        if (A[start] !== B[start]) {
            diffCount++;
            diff.push(A[start], B[start])
        }

        if (A[end] !== B[end]) {
            diffCount++;
            diff.push(A[end], B[end])
        }

        start++;
        end--
    }

   return diffCount === 2 && (diff.length === 4 && diff[0] === diff[3] && diff[1] === diff[2]) || 
    (diffCount === 0 && A === B && A.split('').some(function(c, i, a) { return a.lastIndexOf(c) !== i }));
};

console.log(buddyStrings("aaaaaaabc", 'aaaaaaacb')); // true;
console.log(buddyStrings('ab', 'ab')); // false;
console.log(buddyStrings('ab', 'ba')); // true;
console.log(buddyStrings('aa', 'aa')); // true;
console.log(buddyStrings('abcd', 'abcd')); // false;
console.log(buddyStrings('abcaa', 'abcbb')); // false;
console.log(buddyStrings('abab', 'abab')); // true;
