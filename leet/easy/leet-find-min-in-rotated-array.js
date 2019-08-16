// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// You may assume no duplicate exists in the array.

// thoughts
// use last element as pivot to compare

// if mid < end, move high pointer to mid - 1, 
// if mid > end, move lower pointer to mid + 1, 
// condition for min is if number before mid is higher and mid is less than pivot
// edge cases are min at start or end

function findMinInRotated(array) {
    if (!array || array.length === 0) {
        return undefined;
    }

    const end = array[ array.length - 1 ];

    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.ceil(low + (high - low) / 2);

        if (array[mid] <= end && (array[ mid - 1 ] === undefined || array[ mid - 1 ] > array[ mid ])) {
            return array[ mid ];
        } else if (array[ mid ] > end) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

// console.log(findMinInRotated([4,5,6,7,0,1,2]));
// console.log(findMinInRotated([0, 1, 2,4,5,6,7]))
// console.log(findMinInRotated([6, 4, 3, 0]))

// search array from 1 to num / 2;
// find square if mid * mid = num or num in between mid ^ 2 and mid - 1 ^ 2
// if mid * mid < num, low = mid + 1,
// if mid * mid > num, high = mid - 1 

function findSquareRoot(num) {
    if (!num) return undefined;

    if (num === 1 || num === 1) return num;

    const array = Array.apply(null, {length: Math.floor(num / 2)}).map((_, i) => i + 1);

    let low = 0;
    let high = array.length - 1;
    let ans;
    while (low <= high) {
        let mid = Math.ceil(low + ((high - low) / 2));
        const squared = Math.pow(mid, 2);
        // const higherSquared = Math.pow(mid + 1, 2);
        // if (squared <= num && higherSquared > num) {
        if (squared === num) {
            return mid;
        } else if (squared < num) {
            low = mid + 1;
            ans = mid;
        } else {
            high = high - 1;
        }
    }

    return ans;
}

console.log(findSquareRoot(25));
console.log(findSquareRoot(11));
console.log(findSquareRoot(1));