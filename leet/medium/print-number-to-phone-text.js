function getLetters(num) {
    switch (num) {
        case '2':
            return [ 'A', 'B', 'C' ];
            break;
        case '3':
            return [ 'D', 'E', 'F' ];
            break;
        case '4':
                return [ 'G', 'H', 'I' ];
                break;
        case '5':
                return [ 'J', 'L', 'K' ];
                break;
        case '6':
                return [ 'M', 'N', 'O' ];
                break;
        case '7':
                return [ 'P', 'Q', 'R', 'S' ];
                break;
        case '8':
                return [ 'T', 'U', 'V' ];
                break;
        case '9':
                return [ 'W', 'X', 'Y', 'Z' ];
                break;
        default: 
            return [];
    }
}

function printPhoneNumberMnemonics(numStr) {
    var output = [];
    printPhoneNumberMnemonicsHelper(numStr.split(''), new Array(numStr.length), 0, 0, output);
    return output;
};

function printPhoneNumberMnemonicsHelper(nums, buffer, index, bufferIndex, output) {
    if (bufferIndex === nums.length || index === nums.length) {
        output.push(buffer.join(''));
    } else {
        var letters = getLetters(nums[index]);

        if (letters.length === 0) {
            printPhoneNumberMnemonicsHelper(nums, buffer, index + 1, bufferIndex, output);
        } else {
            letters.forEach(letter => {
                buffer[bufferIndex] = letter;
                printPhoneNumberMnemonicsHelper(nums, buffer, index + 1, bufferIndex + 1, output);
            });
        }
    }
}

console.log(printPhoneNumberMnemonics('213'));
console.log(printPhoneNumberMnemonics('456'));