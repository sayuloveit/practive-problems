function printCombosHelper(array, index, buffer, bufferIndex) {
    if (buffer.length === bufferIndex) {
        console.log(buffer);
        return;
    }

    if (index === array.length) {
        return;
    }

    for (var i = index; i < array.length; i++) {
        buffer[bufferIndex] = array[i];

        printCombosHelper(array, i + 1, buffer, bufferIndex + 1);
    }
}

function prinCombos(array, int) {
    printCombosHelper(array, 1, new Array(int), 0);
}

// prinCombos([1, 2, 3, 4, 5], 4);


// (Level: Medium) Phone Number Mnemonic Problem: Given an N digit phone number, 
// print all the strings that can be made from that phone number. 
// Since 1 and 0 don't correspond to any characters, ignore them. For example:
// 213 => AD, AE, AF, BD, BE, BF, CD, CE, CF 

// 456 => GJM, GJN, GJO, GKM, GKN, GKO,.. etc.

function printWords(a)