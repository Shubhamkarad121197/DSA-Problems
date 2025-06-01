//MaxSum
let arr=[23,45,12,47,87];
let k=3;

//Brute Force Approach
function maxSum(arr, k) {
  let max = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxSum(arr,k)) //Time complexity O(n*k);

//Optimize Approach using Sliding window

function maxSumUsingSlidingWindow(arr,k){
    let max=-Infinity;
    let sum=0
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    max=sum;
    for(let i=k;i<arr.length;i++){
        sum+=arr[i]-arr[i-k];
        max=Math.max(max,sum);
    }
    return max;
    
}

console.log(maxSumUsingSlidingWindow(arr,k))
