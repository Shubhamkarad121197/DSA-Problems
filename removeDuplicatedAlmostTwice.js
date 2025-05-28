function allowAtMostTwice(arr) {
    let countMap = new Map();
    let result = [];

    for (let num of arr) {
        let count = countMap.get(num) || 0;
        if (count < 2) {
            result.push(num);
            countMap.set(num, count + 1);
        }
    }

    return result;
}

let arr = [2, 2, 2, 3, 4, 4, 9];
console.log(allowAtMostTwice(arr));  // Output: [2, 2, 3, 4, 4, 9]
