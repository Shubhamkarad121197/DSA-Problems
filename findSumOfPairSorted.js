let arr=[2 ,4 ,5 ,8 ,9]
let target=7;

function pairOfSortedArr(arr,target){
    let left=0,right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum==target){
            return [arr[left],arr[right]]
        }
        if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return []
}

console.log(pairOfSortedArr(arr,target));