function generatePythagoreanTriplet(n) {
    var res = [];

    for (var a = 1; a <= n; a++) {
        for (var b = a + 1; b <= n; b++) {        
            var c = Math.sqrt(a * a + b * b);
            if (c <= n && c % 1 === 0) {
                res.push([ a, b, c ]);
            }
    
        }
    }

    return res;
}

// n ^ 3, use math hack to find it in O(k), where k is number of triples under n
// easy to integer overflow
console.log(generatePythagoreanTriplet(13));