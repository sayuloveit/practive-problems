// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// iterate over each letter in the string
// keep track of current count - start at 0, keep track of highest count - starting 0
// object of [ char ]: index
// check if char is in set
    // substract currrent count with index of char found in map
    // replace value of char in map with current index 
// if not in set
    // add to char and it's index to map, add 1 to current count 
    // check if current count is higher than highest count, replace if so 

// return highest count


/// two pointers instead

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const stringLength = s.length;
    let highestCount = 0;
    let currentCount = 0;
    let charToIndexMap = {};

    for (let index = 0; index < stringLength; index++) {
        const char = s[index];
        
        if (charToIndexMap[char] !== undefined) {
            currentCount -= charToIndexMap[char];
        }
            currentCount++;
        }
        
        charToIndexMap[char] = index;     
        if (highestCount < currentCount) {
            highestCount = currentCount;
        }
    }

    return highestCount;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbbbb'));  // 1
// console.log(lengthOfLongestSubstring('pwwkew'));   // 3
// console.log(lengthOfLongestSubstring(''));         // 0 
// console.log(lengthOfLongestSubstring('a'));        // 1
// console.log(lengthOfLongestSubstring('dvdf'));     // 3
// console.log(lengthOfLongestSubstring('dvdfed'));   // 4
console.log(lengthOfLongestSubstring('tmmzuxt'));  // 5
