// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(word => canTypeInOneRow(word.toLowerCase()));
};

var row1 = { 
    q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1
}

var row2 = {
    a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1 
}

var row3 = {
    z: 1, x: 1, c: 1, v: 1, b: 1, n: 1, m: 1
}

var canTypeInOneRow = function(word) {
    var row = [ row1, row2, row3 ].filter(row => row[word[0]]);

    if (row.length) {
        for (var i = 0; i < word.length; i++) {
            if (!row[0][word[i]]) return false;
        }

        return true;
    }

    return false;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska", "Dad"]