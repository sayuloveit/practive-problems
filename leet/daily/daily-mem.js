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
    printPhoneNumberMnemonicsHelper();
    return output;
};

function printPhoneNumberMnemonicsHelper() {

}

console.log(printPhoneNumberMnemonics('213'));
console.log(printPhoneNumberMnemonics('456'));
