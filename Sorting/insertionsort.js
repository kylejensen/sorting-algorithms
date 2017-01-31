/*
* Insertion Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

function insertionSort (arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

insertionSort([3,2,34,44,6,211,2,1]); // [ 1, 2, 2, 3, 6, 34, 44, 211 ]
