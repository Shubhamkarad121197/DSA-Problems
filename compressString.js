// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5

let inputStr="abcdffffffffffffffffffrr";
function compressString(str){
    if(str.length<=1){
        return str;
    }
    let newMap=new Map();
    for(let i=0;i<str.length;i++){
        if(newMap.has(str[i])){
            newMap.set(str[i],newMap.get(str[i])+1)
        }
        else{
            newMap.set(str[i],1)
        }
    }
    let newStr=''
    for(let [char,count] of newMap.entries()){
      
        newStr+=char+count
    }
    
    if(newStr.length>str.length){
        return str;
    }
    return newStr;
}

console.log(compressString(inputStr))// Output: a1b1c1d1f18r2