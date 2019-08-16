// Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2

// Example:
// Input: [3, 5, 12, 5, 13]
// Output: True
// Here, 5^2 + 12^2 = 13^2.

/// find all permutations of triplet in array, check each set

// function findPythagoreanTriplets(nums) {
//     var triplets = [];
//     helper(nums, 0, 0, new Array(3), new Array(nums.length), triplets);
//     return triplets.some(triplet => isPythagoreanTriplet(...triplet));
// }

// function helper(nums, startIndex, bufferIndex, buffer, isInBuffer, triplets) {
//     if (bufferIndex === buffer.length) {
//         triplets.push(buffer.slice());
//         return;    
//     }

//     for (var i = startIndex; i < nums.length; i++) {
//         if (!isInBuffer[i]) {
//             buffer[bufferIndex] = nums[i];
//             isInBuffer[i] = true;
//             helper(nums, startIndex + 1, bufferIndex + 1, buffer, isInBuffer, triplets);
//             isInBuffer[i] = false;
//         }
//     }
// }

function isPythagoreanTriplet(a, b, c) {
    var aSqr = Math.pow(a, 2);
    var bSqr = Math.pow(b, 2);
    var cSqr = Math.pow(c, 2);

    return aSqr + bSqr === cSqr || aSqr + cSqr === bSqr || bSqr + cSqr === aSqr; 
}

function findPythagoreanTriplets(nums) {
    return helper(nums, 0, 0, new Array(3), new Array(nums.length));
}
    
function helper(nums, startIndex, bufferIndex, buffer, isInBuffer) {
    if (bufferIndex === buffer.length) {
        if (isPythagoreanTriplet(...buffer)) {
            return true;
        }
        return false;
    }

    for (var i = startIndex; i < nums.length; i++) {
        if (!isInBuffer[i]) {
            buffer[bufferIndex] = nums[i];
            isInBuffer[i] = true;
            helper(nums, startIndex + 1, bufferIndex + 1, buffer, isInBuffer);
            isInBuffer[i] = false;
        }
    }
    console.log('foo');
}

console.log(findPythagoreanTriplets([3, 12, 13, 5])); // true;