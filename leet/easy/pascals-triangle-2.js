 // Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// Example:

// Input: 3
// Output: [1,3,3,1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
    var prevRow = [];
    var row = [];
    for (var i = 0; i < rowIndex + 1; i++) {
        row = generatePascalRow(i + 1, prevRow);
        prevRow = row;
    }

    return row;
};

var generatePascalRow = function(num, previousRow) {
    if (num === 1) return [ 1 ];
    
    var row = [];
    for (var i = 0; i < num; i++) {
        var res = (previousRow[i - 1] || 0) + (previousRow[i] || 0);
        row.push(res);
    }

    return row;
}

console.log(getRow(5));
console.log(getRow(3));
