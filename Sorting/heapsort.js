/*
* Heap Sort Algorithm in JavaScript
* Worst-Case O(n log n)
*/

var arrayLength,
    myArr = [40, 10, 50, 24, 1, 2, 4, -10, 15, 7, 8, 5];

var buildHeap = function (arr) {
    arrayLength = arr.length;
    for (var i = Math.floor(arrayLength / 2); i >= 0; i--) {
        heapify(arr, i);
    }
};

var heapify = function (arr, i) {
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
};

var swap = function (arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

var heapSort = function (arr) {
    buildHeap(arr);
    var len = arr.length;
    for (var i = len - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrayLength--;
        heapify(arr, 0);
    }
    return arr;
};

console.log(heapSort(myArr));
