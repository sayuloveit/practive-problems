// 1. Merge Intervals - Given a list of intervals, merge all overlapping intervals. 
// At the end of the merge, there should be no overlapping intervals.

// For example,
// Input = (1,3), (3,5), (6,8), (7,9)
// Output = (1,5), (6,9)


// make points into objects, mark a start field boolean;
// sort points
// iterate through sorted points, make first start and end into a pair,
// once one pair made, look for another start to end pair,
// repoeat until end of sorted points 

function mergeIntervals(intervals) {
    var sorted = intervals.sort((a, b) => a[0] - b[0]);
    var merged = [];

    console.log(sorted);
    for (var i = 0; i < sorted.length; i++) {
        var mergedLength = merged.length;
        var interval = sorted[i];

        // if no overlap
        if (mergedLength === 0 || merged[mergedLength - 1 ][1] < interval[0]) {
            merged.push(interval);
        } else {
            var [ x1, y1 ] = merged.pop();
            var [ x2, y2 ] = interval;
            var mergedInterval = y1 < y2 ? [ x1, y2 ] : [ x1, y1 ];
            merged.push(mergedInterval);
        }
    }

    return merged;
}

// console.log(mergeIntervals([ [1,3], [3,5], [6,8], [7,9] ])); // [ [1,5], [6,9] ]
// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]

console.log(mergeIntervals([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]])); // [[0,7]]
