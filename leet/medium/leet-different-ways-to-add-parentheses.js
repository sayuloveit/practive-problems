// Given a string of numbers and operators, 
// return all possible results from computing all the different possible ways to group numbers and operators. 
// The valid operators are +, - and *.

// Example 1:

// Input: "2-1-1"
// Output: [0, 2]
// Explanation: 
// ((2-1)-1) = 0 
// (2-(1-1)) = 2
// Example 2:

// Input: "2*3-4*5"
// Output: [-34, -14, -10, -10, 10]
// Explanation: 
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var result = [];
    
    for (var i = 0; i < input.length; i++) {
        if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
            var part1 = input.substring(0, i);
            var part2 = input.substring(i + 1);

            var part1Res = diffWaysToCompute(part1);
            var part2Res = diffWaysToCompute(part2);

            part1Res.forEach(p1 => {
                part2Res.forEach(p2 => {
                    var c = 0;

                    switch (input[i]) {
                        case '+':
                            c = p1 + p2;
                            break;
                        case '-':
                            c = p1 - p2;
                            break;
                        case '*':
                            c = p1 * p2;
                            break;
                    }
                    result.push(c);
                });
            });
        }
    }

    if (result.length === 0) {
        result.push(Number.parseInt(input));
    }
    
    return result;
};

console.log(diffWaysToCompute("2-1-1")); // [0, 2];
console.log(diffWaysToCompute("1")); // [0, 2];
console.log(diffWaysToCompute("2*3-4*5")); // [-34, -14, -10, -10, 10];
