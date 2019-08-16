// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var sMap = {};
    var tMap = {};
    for (var i = 0; i < s.length; i++) {
        var sChar = s[i];
        var tChar = t[i];

        if (sMap[sChar] && sMap[sChar] !== tChar) {
            return false;
        } else {
            sMap[sChar] = tChar;
        }

        if (tMap[tChar] && tMap[tChar] !== sChar) {
            return false;
        } else {
            tMap[tChar] = sChar;
        }
    }

    return true;
};

console.log(isIsomorphic('aaa', 'bbb')); // true;
console.log(isIsomorphic('aaa', 'aaa')); // true;
console.log(isIsomorphic('egg', 'add')); // true;
console.log(isIsomorphic('foo', 'bar')); // false;
console.log(isIsomorphic('paper', 'title')); // true;
console.log(isIsomorphic('ab', 'aa')); // false;