let arr = [10, 20, 10, 5, 15];

function prefixSumOfArr(arr){
    let prefixSum=[];
    prefixSum[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i]
    }
   return prefixSum
}

console.log(prefixSumOfArr(arr))


function suffixSumOfArr(arr){
    let suffixSum=[];
    suffixSum[arr.length-1]=arr[arr.length-1];
    
    for(let i=arr.length-2;i>=0;i--){
        suffixSum[i]=suffixSum[i+1]+arr[i]
    }
   return suffixSum
}

console.log(suffixSumOfArr(arr))