

function subArraySumsToK(arr, k) {

    if (!arr || arr.length === 0) {
        return null;
    }

    var sum = 0;
    var lookUp = {};

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum - k === 0) {
            return [ 0, i ];
        }

        if (lookUp[ sum - k ]) {
            return [ lookUp[ sum - k ] + 1, i];
        } 

        lookUp[ sum ] = i;
    }

    return []; // not found
}

console.log(subArraySumsToK([ 6, -3, 5, 1, -2 ], 4));
console.log(subArraySumsToK( [2,4,-2,1,-3,5,-3], 0));
console.log(subArraySumsToK( [2, -1, 2], 3));