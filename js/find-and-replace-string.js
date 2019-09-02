// pusedo code
// iterate over each index of S
// if index of S not in indexs, then push add letter as index to result string
// if hitting index present in indexes, check the corresponding source
// use shift on indexs, when length 0, add rest of string to result string
// if S at index is undefined, exit as well - from updating S index
    // if source is one letter long, 
        // if match with S letter at index, then push source to result string, otherwise push S letter at index
    // if source is more than 1 letter
        // find length of source, add to S index, add to index to find the substring of S
            // if substring match source, push source else push substring to result string


var findReplaceString = function(S, indexes, sources, targets) {
    var sLength = S.length;
    var result = '';
    for (var index = 0; index < sLength; i++) {
        if (S[index]) {
            
        }
    }

    return result === '' ? S : result;;
};

var test = 'abcd';
for (var i = 0; i < test.length; i++) {
    if (i === 2) {
        i += 2;
    }
    console.log(test[i]);
}