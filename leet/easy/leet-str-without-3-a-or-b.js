// Given two integers A and B, return any string S such that:

// S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
// The substring 'aaa' does not occur in S;
// The substring 'bbb' does not occur in S.


/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    var res = '';

    while (A || B) {
        var writeA;
        resLength = res.length;
        if (resLength >= 2 && res.charAt(resLength - 1) === res.charAt(resLength - 2)) {
            writeA = res.slice(-2) === 'bb';
        } else {
            writeA = A >= B;
        }


        if (writeA) {
            res = res + 'a';
            A--
        } else {
            res = res + 'b';
            B--;
        }
    }

    return res;
};

console.log(strWithout3a3b(1, 2));
console.log(strWithout3a3b(4, 1));
console.log(strWithout3a3b(1, 1));
console.log(strWithout3a3b(100, 50));