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

function isIsomophic(s, t) {
    if (s.length === t.length) {
        var charMap1 = {};
        var charMap2 = {};
        var length = s.length

        for (var index = 0; index < length; index++) {
            var char1 = s.charAt(index);
            var char2 = t.charAt(index);

            if (charMap1[char1] === undefined) {
                charMap1[char1] = char2;
            }

            if (charMap2[char2] === undefined) {
                charMap2[char2] = char1;
            }

            if (charMap1[char1] !== char2 || charMap2[char2] !== char1) {
                return false
            }    
        }

        return true;
    }

    return false;
}

console.log(isIsomophic('egg', 'add')); // true;
console.log(isIsomophic('foo', 'bar')); // false;
console.log(isIsomophic('paper', 'title')); // true;
console.log(isIsomophic('ab', 'ca')); // true


console.log(isIsomophic('pa er', 'title')); // false
console.log(isIsomophic('paper', ' itle')); // false
console.log(isIsomophic('ab', 'aa')); // false
console.log(isIsomophic('aa', 'a ')); // false