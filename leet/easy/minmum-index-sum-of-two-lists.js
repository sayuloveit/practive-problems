// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Note:
// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var lookup = {};
    var results = [];
    list1.forEach((res, index) => {
        lookup[res] = index;
    });

    list2.forEach((res, index) => {
        if (lookup[res] !== undefined) {
            results.push({ [res ]: lookup[res] + index});
        }
    });

    if (results.length === 1) return Object.keys(results[0]);

    // find min index
    var min = Number.MAX_VALUE;
    results.forEach((res, index) => {
        var sumIndex = Object.values(res)[0]
        if (sumIndex < min) { min = sumIndex; }
    });

    var finalResults = results.reduce((output, res) => {
        var sumIndex = Object.values(res)[0];
        if (sumIndex === min) {
            output.push(Object.keys(res)[0]);
        }
        return output;
    }, []);
    return finalResults;
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], 
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"])); // ["Shogun"]


console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], 
["KFC", "Shogun", "Burger King"])); // ["Shogun"]


console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], 
["KFC","Burger King","Tapioca Express","Shogun"])); // ["KFC","Burger King","Tapioca Express","Shogun"]

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], 
["KFC","Shogun","Burger King"])); // ["Shogun"]