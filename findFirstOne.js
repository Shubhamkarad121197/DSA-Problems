function zeroOnes(n, arr) {
     let low = 0, high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === 1) {
            result = mid;     
            high = mid - 1;   
        } else {
            low = mid + 1;  
        }
    }

    return result;
}
let arr=[0, 0, 1, 1]
console.log(zeroOnes(arr))