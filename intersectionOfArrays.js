let arr1=[1, 2, 2, 1,3,5,6];
let arr2=[2,2,3,5,7,9];


function IntersectionOfTwoArrays(arr1,arr2){
    let newMap=new Map;
    let result=[]
    for(let num of arr1){
        if(newMap.has(num)){
            newMap.set(num,newMap.get(num)+1)
        }
        else{
            newMap.set(num,1)
        }
    }
    for(let num of arr2){
        if(newMap.has(num)){
            result.push(num)
        }
    }
    return result;
}

console.log(IntersectionOfTwoArrays(arr1,arr2))