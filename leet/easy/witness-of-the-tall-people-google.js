// There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

// Example:
// Input: [3, 6, 3, 4, 1]  
// Output: 3
// Explanation: Only [6, 4, 1] were able to see in front of them.
//  #
//  #
//  # #
// ####
// ####
// #####
// 36341                                 x (murder scene)

// iterate from back of heights
// (assume same height can't see over)
// keep track of heightest so far, 
// if encounter a height taller than tallest height so far, add to count and udpate tallest height


function witnesses(heights) {
    var count = 0;
    var tallestSoFar = -1;

    var witnesses = [];

    for (var i = heights.length - 1; i >= 0; i--) {
        var witnessHeight = heights[i];

        if (witnessHeight > tallestSoFar) {
            count++;
            tallestSoFar = witnessHeight;
            witnesses.push(witnessHeight);
        }
    }

    console.log(witnesses);
    return count;
}

console.log(witnesses([3, 6, 3, 4, 1])); // 3