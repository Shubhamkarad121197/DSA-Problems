const arr=[1,3,4,2,1];
let k=3;
function findElement(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i
        }
    }
}
console.log(findElement(arr,k));