function dutchFlag(arr, pivot) {
    var low = -1;
    var mid = -1;
    var high = arr.length;

    while (mid + 1 < high) {
        let toPlace = arr[mid + 1];
        if (toPlace > pivot) {
            swap(arr, mid + 1, high - 1);
            high--;
        } else if (toPlace < pivot) {
            swap(arr, low + 1, mid + 1);
            low++;
            mid++
        } else {
            mid++;
        }
    }

    return arr;
}

function swap(arr, fromIndex, toIndex) {
    var tmp = arr[fromIndex];
    arr[fromIndex] = arr[toIndex];
    arr[toIndex] = tmp;
    return arr;
}

console.log(dutchFlag([ 4, 5, 2, 6, 1, 0, 5, 2 ], 2))
console.log(dutchFlag( [1,0,1,2,1,0,1,2], 2))