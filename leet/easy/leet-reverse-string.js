// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var start = 0;
    var end = s.length - 1;
    
    var tmp;
    while (start < end) {
        tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;

        start++;
        end--
    }

    return s;
};

// console.log(reverseString(["H","a","n","n","a","h"])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
// console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]

var reverseStringRecursion = function(s) {
    var reversedArr = [];
    reverseHelper(s, 0, reversedArr);
    return reversedArr;
}
var reverseHelper = function(charArr, index, reverseArray) {
    if (index >= charArr.length) return;
    reverseHelper(charArr, index + 1, reverseArray);
    reverseArray.push(charArr.pop());
}

console.log(reverseStringRecursion(["H","a","n","n","a","h"])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
console.log(reverseStringRecursion(["h","e","l","l","o"])); // ["o","l","l","e","h"]