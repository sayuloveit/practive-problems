// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// Example:

// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var results = [];
    palidromePartition(s, 0, [], results);

    return results;
};

// if string is palidrome, add to partition,
// for i = index to string length,
// get substring from i till end, 
// recurse helper(substring, i, partition)
// add partition to total

function palidromePartition(str, startIndex, partition, results) {
    if (startIndex === str.length) {
        results.push(partition.concat());
        return;
    }

    for (var i = startIndex; i < str.length; i++) {
        var substr = str.substring(startIndex, i + 1);
        if (isPalidrome(substr)) {
            partition.push(substr);
            palidromePartition(str, i + 1, partition, results);
             // remove if not all fit
            partition.pop();
        }
    }
};


function isPalidrome(str) {
    while (str.length > 1) {
        var start = str[0];
        var end = str[str.length - 1];

        if (start !== end) return false;

        str = str.substring(1, str.length -1);
    }
    return true;
}

// console.log(partition('aab')); // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
// console.log(partition('aaba')); // [ [ 'a', 'a', 'b', 'a' ], [ 'aba' ], [ 'aa', 'b', 'a' ] ]
console.log(partition('cdd')); // [["c","d","d"],["c","dd"]]