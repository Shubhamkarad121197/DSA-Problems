let arr=[12, 8, 3, 0, 7];

function quickSort(arr){
    if(arr.length<1){
        return arr;
    }
    let pivot=arr[0];
    let left=[];
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr))