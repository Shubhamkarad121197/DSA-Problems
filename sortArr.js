let arr=[2, -5, 1, -2, 4]

function sortArr(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    
    return arr;
    
}

console.log(sortArr(arr));