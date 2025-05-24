let arr= [1, 2, 2, 3, 1, 2]

let without= [2, 3]

function withoutElement(arr,without){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(!without.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(withoutElement(arr,without))//