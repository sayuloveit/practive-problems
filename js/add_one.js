// add 1 to array of number
// ex: [ 1, 2, 3 ] -> [ 1, 2, 4 ], [ 9 ] -> [ 1, 0 ]

function add_one(int_array) {
    const length = int_array.length;

    if (length === 0) {
        return [ 1 ];
    }

    const addOne = int_array[length - 1] + 1;

    let carry = addOne > 9 ? 1 : 0;

    const result = [ carry ? 0 : addOne ];

    for (let i = length - 1; i > 0; i--) {
        const digit = carry ? int_array[i] + carry : int_array[i];
        carry = digit > 9 ? 1 : 0;
        result.unshift(carry ? 0 : digit); 
    }

    // add extra digit if needed
    if (carry) {
        result.unshift(1)
    }

    return result;
}

console.log(add_one([ 1, 2, 3 ]))
console.log(add_one([ 9 ]))
console.log(add_one([ 9, 9, 9 ]))

// follow up:
// can generalize carry from 1 to adding any number, making function work from add any numbeR