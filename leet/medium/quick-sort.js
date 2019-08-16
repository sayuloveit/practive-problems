
function sortByPivot(arr, pIndex, start, end) {
    var low = start - 1;
    var mid = start - 1;
    var high = end + 1;

    const pivot = arr[ pIndex ];
    while (mid + 1 < high) {
        var next = arr[ mid + 1];

        if (next < pivot) {
            swap(arr, low + 1, mid + 1);
            low++;
            mid++;
        } else if (next > pivot) {
            swap(arr, mid + 1, high - 1);
            high--;
        } else {
            mid++;
        }
    }

    return [ low, high ];
}

function swap(arr, from , to) {
    var tmp = arr[to];
    arr[to] = arr[from];
    arr[from] = tmp;
}

function quickSort(arr) {
    sortHelper(arr, 0, arr.length - 1);
}   

function sortHelper(arr, start, end) {
    if (start < 0 || end > arr.length || start >= end) {
        return;
    }

    // fixed pivot;
    // var pIndex = start + (end - start) - 1;

    var pIndex = getRandomIntInclusive(start, end);
    var boundaries = sortByPivot(arr, pIndex, start, end);
    sortHelper(arr, start, boundaries[0]);
    sortHelper(arr, boundaries[1], end);
}

function getRandomIntInclusive(min, max) {
    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [ 7, 1, 4, 5, 6, 2 ,5, 3, 4, 3 ];
quickSort(arr)
console.log(arr);