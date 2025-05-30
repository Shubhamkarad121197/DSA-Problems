let arr=[1, 4, 2, 5];

function euqalPartition(arr){
    let prefixSum=[];
    prefixSum[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i]
    }

    let suffixSum=[];
    suffixSum[arr.length-1]=arr[arr.length-1];
    for(let i=arr.length-2;i>=0;i--){
        suffixSum[i]=suffixSum[i+1]+arr[i]
    }
    for(let i=0;i<arr.length;i++){
        if(suffixSum[i]==prefixSum[i]){
            return i;
        }
    }
    return -1;
}
console.log(euqalPartition(arr))