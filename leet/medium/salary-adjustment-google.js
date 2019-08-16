// Give an array of salaries. The total salary has a budget. At the beginning, the total salary of employees is larger than the budget. It is required to find the number k, and reduce all the salaries larger than k to k, such that the total salary is exactly equal to the budget.

// Example 1:

// Input: salaries = [100, 300, 200, 400], budget = 800
// Output: 250
// Explanation: k should be 250, so the total salary after the reduction 100 + 250 + 200 + 250 is exactly equal to 800.
// You can assume that solution always exists.

////////
// Sort - [100, 200, 300, 400 ]
// Replace maximum value with k, [ 100, 200, 300, k ]
// Calculate k , k = (800-100-200-300) = 200
// If k is less than the next max, Repeat from step 2 , else done.
// 2*. [100, 200, k, k ]
// 3* Calculate k , k = (800-100-200)/2 = 250
// 4* Done..

function findGrantCap(grants, budget) {
    // reverse sort
    var sorted = grants.sort((a, b) => b - a);
    
    var sum = grants.reduce((sum, i) => (sum + i), 0);
    var k = 0;
    var reduce = 0;
    for (var i = 0; i < sorted.length; i++) {
        reduce += sorted[i];
        k = (budget - sum + reduce) / (i + 1);

        if (k > sorted[i + 1]) {
            break;
        }
    }

    return k;
}

console.log(findGrantCap([100, 300, 200, 400], 800)); // 250;
console.log(findGrantCap([12, 99], 72)); // 60;
console.log(findGrantCap([12, 53, 99], 72)); // 30;
