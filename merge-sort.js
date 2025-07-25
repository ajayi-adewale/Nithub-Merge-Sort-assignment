var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var leftArray = arr.slice(0, mid);
    var rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray) {
    var sortedArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        }
        else {
            sortedArray.push(rightArray.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], sortedArray, true), leftArray, true), rightArray, true);
}
var arr = [5, 8, -4, 7, 6, 2, 3];
console.log(mergeSort(arr));
