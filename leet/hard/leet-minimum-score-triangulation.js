// Given N, consider a convex N-sided polygon with vertices labelled A[0], A[i], ..., A[N-1] in clockwise order.

// Suppose you triangulate the polygon into N-2 triangles.  For each triangle, the value of that triangle is the product of the labels of the vertices, and the total score of the triangulation is the sum of these values over all N-2 triangles in the triangulation.

// Return the smallest possible total score that you can achieve with some triangulation of the polygon.

 

// Example 1:

// Input: [1,2,3]
// Output: 6
// Explanation: The polygon is already triangulated, and the score of the only triangle is 6.

/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    return minScoreFromTo(A, 0, A.length - 1, {});
};

var minScoreFromTo = function(A, from, to, lookup) {
    if (from >= to - 1) return 0;

    var key = from.toString() + to.toString();
    if (lookup[key] !== undefined) return lookup[key];
    
    var min = Number.MAX_SAFE_INTEGER;
    
    for (var mid = from + 1; mid < to; mid++) {
        min = Math.min(min, A[mid] * A[from] * A[to] + 
            minScoreFromTo(A, from, mid, lookup) + minScoreFromTo(A, mid, to, lookup));
    }

    lookup[key] = min;

    return min;
}

console.log(minScoreTriangulation([1, 2, 3]));  // 6
console.log(minScoreTriangulation([1,3,1,4,1,5])); // 13