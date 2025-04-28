arr = ["a", 1, "b", 2, "c", "d", 3, 4, "e"];
function extractNos(arr){
    let nums=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            nums.push(arr[i])
        }
    }
    return nums;
}

console.log(extractNos(arr));