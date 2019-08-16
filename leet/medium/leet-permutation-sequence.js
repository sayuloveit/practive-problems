// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
};

// var permutationHelper(n, )



console.log(getPermutation(3, 3)); // '213'
console.log(getPermutation(4, 9)); // '2314'

function permut(string, k) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations'

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }

    return permutations;
}

function *permute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
      yield *permute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]];
    }
  }
  
  console.log(Array.from(permute("xyz".split(''))));