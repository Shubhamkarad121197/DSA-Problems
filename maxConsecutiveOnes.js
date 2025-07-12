// Input: [1,1,0,1,1,1]
// Output: 3

// Input: [1,0,1,1,0,1]
// Output: 2

let arr = [1, 1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0; // reset on 0
        }
    }

    return maxCount;
}

console.log(findMaxConsecutiveOnes(arr)); // Output: 3
