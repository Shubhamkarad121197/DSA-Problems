console.log("Try programiz.pro");

let arr=[2 ,2 ,1,1,4];
function findSingleNumber(arr){
    let newMap=new Map();
    for(let num of arr){
        if(newMap.has(num)){
            newMap.set(num,newMap.get(num)+1)
        }
        else{
              newMap.set(num,1)
        }
    }
    let singleNum=0;
    for(let [number,count] of newMap.entries()){
        if(count==1){
            singleNum=number
        }
    }
    return singleNum;
}
console.log(findSingleNumber(arr))//4


// console.log(findSingleNumber([2,2,1,1,4]))//4
// console.log(findSingleNumber([1,2,3,4,5,6,7,8,9]))//1