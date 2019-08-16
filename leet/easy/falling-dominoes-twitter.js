// Given a string with the initial condition of dominoes, where:

// . represents that the domino is standing still
// L represents that the domino is falling to the left side
// R represents that the domino is falling to the right side

// Figure out the final position of the dominoes. If there are dominoes that get pushed on both ends, the force cancels out and that domino remains upright.

// Example:
// Input:  ..R...L..R.
// Output: ..RR.LL..RR

function pushDominoes(dominoes) {

    var res = '';

    for (var i = 0; i < dominoes.length; i++) {
        var dominoe = dominoes[i];
        var previous = dominoes[i - 1];
        var next = dominoes[i + 1];

        if (dominoe === 'R' && next === 'L' || dominoe === 'L' && previous === 'R') {
            res += '..';
            i++;
        } else if (dominoe === 'R' && next === '.') {
            res += 'RR';
            i++;
        } else if (dominoe === 'L' && previous === '.' && i !== dominoes.length - 1) {
            res = res.substring(0, res.length - 1);
            res += 'LL';
        } else {
            // dominoe = 'L' && previous = 'L
            // dominoe = 'L' && previous = undefined
            // dominoe = 'R' && next = 'R' 
            // dominoe = '.'
            res += dominoe;
        }
    }

    return res;
}

console.log(pushDominoes('..R...L..R.')); //..RR.LL..RR
console.log(pushDominoes('.LR.')); // LLRR
console.log(pushDominoes('..RL')); // ....
console.log(pushDominoes('.LRL')); // LL..
console.log(pushDominoes('L..')); // L..
console.log(pushDominoes('.LRR')); // LLRR
console.log(pushDominoes('L.RL')); // L...
console.log(pushDominoes('RLR.L')); // ..RRL