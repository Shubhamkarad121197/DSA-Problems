// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");


// let arr=[2,4,5,9,8];
// let target=7;
// let sum=0;
// let result=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;i<arr.length;i++){
//         sum=arr[i]+arr[j]
//         if(sum==target){
//             result.push(arr[i],arr[j])
//         }
//     }
// }
// console.log(result)

let arr=[2,4,5,9,8];
let target=7;
function pairOfUnsorted(arr,target){
    let indexMap=new Map()
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(indexMap.has(diff)){
            let diffIndex=indexMap.get(diff);
            return [Math.min(i,diffIndex),Math.max(i,diffIndex)]
        }
        indexMap.set(arr[i],i)
    }
    return [];
}

console.log(pairOfUnsorted(arr,target))