let arr=[2,3,5,2,3,5,6,7,8,9,6,7,8];

function removeDuplicates(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(removeDuplicates(arr))

//Using Set
function removeDuplicatesUsingSet(arr){
    let uniqueArr=[...new Set(arr)];
    return uniqueArr;
}

 console.log(removeDuplicatesUsingSet(arr))