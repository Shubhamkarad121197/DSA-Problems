let arr=[4,6,8,16];
function GCD(a,b){
    if(b==0){
        return a;
    }


    return GCD(b,a%b);

}

function GCDOfArray(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
        result=GCD(result,arr[i])
    }
    return result;
}

console.log(GCDOfArray(arr))