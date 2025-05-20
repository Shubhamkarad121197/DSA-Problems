let arr=[3, 4, 5, 2];

function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr;
}


function maxProduct(arr){
    let sortedArr=sortArr(arr);
    let max=sortedArr[sortedArr.length-1];
    let secondMax=sortedArr[sortedArr.length-1];
    let maxProduct=(max-1) * (secondMax-1)
    
    
    return maxProduct
}

console.log(maxProduct(arr))