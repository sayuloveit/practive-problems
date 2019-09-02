function printCombosHelper(a, buffer, startIndex, bufferIndex) {

    if (bufferIndex === buffer.length) {
        console.log(buffer);
        return;
    }

    if (startIndex === a.length) {
        console.log('donzo');
        return;
    }

    for (var i = startIndex; i < a.length; i++) {
        buffer[bufferIndex] = a[i];

        printCombosHelper(a, buffer, i + 1, bufferIndex + 1);
    }
}

function printCombos(a, x) {
    if (a === null || a === undefined || x > a.length) {
        return;
    }
    printCombosHelper(a, new Array(x), 0, 0);
}

printCombos([1, 2, 3, 4, 5], 3);