// Given a string and a string dictionary, find the longest string in the dictionary that can be 
// formed by deleting some characters of the given string. 
// If there are more than one possible results, return the longest word with the smallest lexicographical order. 
// If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.


// plan

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var longestWord = '';

    for (var i = 0; i < d.length; i++) {
        var dictWord = d[i];
        if (dictWord.length >= longestWord.length) {
            var slowPt = 0;
            var fastPt = 0;

            // use pointers to find matching letters
            while (slowPt < dictWord.length && fastPt < s.length) {
                if ( dictWord[slowPt] === s[fastPt]) {
                    slowPt++;
                }
                fastPt++;
            }
            
            // check if dictionary word is in string
            if (slowPt === dictWord.length) {
                longestWord = longestWord.length < slowPt || 
                (longestWord.length === slowPt && dictWord < longestWord) ? dictWord : longestWord;
            }

        }
    }


    return longestWord;    
};

console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"])); // apple
console.log(findLongestWord('abpcplea', ["a","b","c"])); // a
console.log(findLongestWord('bab', ["ba","ab","a","b"])); // ab