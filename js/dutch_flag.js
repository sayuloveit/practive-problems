function dutchFlagSort(array, index) {
    if (array === undefined || index < 0 || index >= array.length) {
        return array;
    }

    const pivot = array[index];
    let low = -1;
    let mid = -1;
    let high = array.length;

    while (mid + 1 < high) {
        if (array[mid + 1] > pivot) {
            swap(array, high - 1, mid + 1);
            high--;
        } else if (array[mid + 1] === pivot) {
            mid++;
        } else {
            // mid[a + 1] < pivot
            swap(array, mid + 1, low + 1);
            mid++;
            low++;
        }
    }

    return array;
}

function swap(array, placeOne, placeTwo) {
    let tmp = array[placeOne];
    array[placeOne] = array[placeTwo];
    array[placeTwo] = tmp;
    console.log('sorting: ', array)
    return array;
}

console.log(dutchFlagSort([3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3], 5));