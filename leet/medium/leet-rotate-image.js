// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix === null || matrix.length === 0 || matrix.length !== matrix[0].length) {
        return;
    }

    for (var layer = 0; layer < matrix.length / 2; layer++) {
        rotateBy90(matrix, layer, matrix.length - 1 - layer);
    }

};
// start = 0, 3;
function rotateBy90(matrix, start, end) {
    for (var cur = 0; start + cur < end; cur++) {
        var top = matrix[start][start + cur];
        matrix[start][start + cur] = matrix[end - cur][start]; // copy from left to top
        matrix[end - cur][start] = matrix[end][end - cur]  // copy from bottom to left 
        matrix[end][end - cur] = matrix[start + cur][end] // copy right to bottom
        matrix[start + cur][end] = top; // copy top to right
    }
}

var inputMatrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
];

rotate(inputMatrix);
console.log(inputMatrix);