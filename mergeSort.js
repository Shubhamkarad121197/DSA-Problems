// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr=[12, 8, 3, 0, 7];


function mergeSort(n,arr){
     if (arr.length <= 1) return arr;
    let mid=Math.floor((arr.length)/2);
    let left=mergeSort(n,arr.slice(0,mid));
    let right=mergeSort(n,arr.slice(mid));
  
    
    return merge(left,right)
}


function merge(left,right){
    let result=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }
        else{
             result.push(right[rightIndex]);
             rightIndex++;
        }
        
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(5,arr))

