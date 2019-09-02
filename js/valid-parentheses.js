// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

var isValid = function(s) {
    var bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    var sLength = s.length;

    var stack = [];

    for (var index = 0; index < sLength; index++) {
        const char = s.charAt(index);

        if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
console.log(isValid('')); // true
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('{()[]}')); // true
console.log(isValid('{')); // true