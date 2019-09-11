// ou are given a string s, and an integer k. Return the length of the longest 
// substring in s that contains at most k distinct characters.

// For instance, given the string:
// aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. 
// The answer should be 5.

function printLongestSubStringWithKDistinctCharacters(str, k) {
    var left = 0;
    var right = 0;

    var charMap = {};
    var max = 0;

    while (right < str.length) {
        if (charMap[str[right]] === undefined && Object.keys(charMap).length === k) {
            // move left until under k
            while(Object.keys(charMap).length === k) {
                charMap[str[left]]--;
                if (charMap[str[left]] === 0) {
                    delete charMap[str[left]];
                }
                left++
            }
        } else {
            charMap[str[right]] ? charMap[str[right]]++ : charMap[str[right]] = 1;
            console.log(left, right);
            max = Math.max(max, right - left + 1);
            right++;
        }
    }

    return max;
}

console.log(printLongestSubStringWithKDistinctCharacters('aabcdefff', 3)); // 5
console.log(printLongestSubStringWithKDistinctCharacters('aabbcc', 1)); // 2
console.log(printLongestSubStringWithKDistinctCharacters('aabbcc', 2)); // 4