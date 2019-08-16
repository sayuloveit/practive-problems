function sortByPivot(arr, k, start, end) {
    var low = start;
    var mid = start;
    var high = end;

    while (mid + 1 < high) {
        var next = arr[ mid + 1];

        if (next === k) {
            mid++;
        } else if (next > k) {
            swap(arr, mid + 1, high - 1);
            high--;
        } else {
            swap(arr, low + 1, mid + 1);
            low++;
            mid++;
        }
    }
    
    return [ low, high ];
}

function swap(arr, from, to) {
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

function pivotSort(arr) {
    
}

var test = [ 2, 5, 1, 6, 3, 8, 2] ;
console.log(sortByPivot(test, 3, -1, -1));
console.log(test);