// Given a string S and a character C, return an array of integers representing the shortest 
// distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    if (S === undefined || C === undefined) return [];

    var cIndexes = findAllIndexofC(S, C);

    if (cIndexes === undefined) return [];

    var res = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] !== C) {
            res.push(findMinDistance(i, cIndexes));
        } else {
            res.push(0);
            intialIndex = i;
        }
    }

    return res;
};

var findAllIndexofC = function(S, C) {
    var index = S.indexOf(C);

    if (index === -1) return;

    var cIndex = [ index ];

    while (index < S.length - 1) {
        var nextIndex = S.indexOf(C, index + 1);
        if (nextIndex !== -1) cIndex.push(nextIndex);
        index = nextIndex;
    }

    return cIndex;
}

var findMinDistance = function(sIndex, cIndexes) {
    // var findMin = cIndexes.reduce((min, cIndex) => {
    //     var dist = Math.abs(cIndex - sIndex);
    //     return dist < min ? dist : min;
    // }, Number.MAX_SAFE_INTEGER);


    // return findMin;

    var min = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < cIndexes.length; i++) {
        var cIndex = cIndexes[i];
        min = Math.min(Math.abs(cIndex - sIndex), min);
    }

    return min;
}

console.log(shortestToChar('loveleetcode', 'e')); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
console.log(shortestToChar('', 'e')); // []
console.log(shortestToChar('aaba', 'a')); // []

// alternative, do 2 loops, one forward and one backward to take the min distance