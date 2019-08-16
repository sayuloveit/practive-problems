// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [ ];
    for (var i = 0; i < numRows; i++) {
        triangle.push(generatePascalRow(i + 1, triangle[i - 1]));
    }

    return triangle;
};

var generatePascalRow = function(num, previousRow) {
    if (num === 0 || !previousRow) return [ 1 ];
    
    var row = [];
    for (var i = 0; i < num; i++) {
        var res = (previousRow[i - 1] || 0) + (previousRow[i] || 0);
        row.push(res);
    }

    return row;
}

console.log(generate(5));