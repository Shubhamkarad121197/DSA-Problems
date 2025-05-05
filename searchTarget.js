

function searchTarget(arr, x) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) return mid;

        if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11];
console.log(searchTarget(arr, 7)); // Output: 3
