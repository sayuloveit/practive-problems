// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

var combine = function(n, k) {
    const arr = new Array(n);

    for (var i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    const isInBufferArr = new Array(n).fill(0);
    const res = [];

    comboHelper(arr, new Array(k), 0, isInBufferArr, res);

    return res;
};

function comboHelper(arr, buffer, bufferIndex, isInBufferArr, res) {
    if (bufferIndex === buffer.length) {
        res.push([].concat(buffer));
        return;
    }

    for (var i = 0; i < arr.length; i++) {
        if (!isInBufferArr[i]) {
            buffer[bufferIndex] = arr[i];
            
            isInBufferArr[i] = 1;
            comboHelper(arr, buffer, bufferIndex + 1, isInBufferArr, res);
            isInBufferArr[i] = 0;
        }
    
    }
}

console.log(combine(4, 2));