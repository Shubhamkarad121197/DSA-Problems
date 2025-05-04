let str="madam";

function stringPallindrome(str){
    let left=0,right=str.length-1
    while(left<right){
        if(str[left]!==str[right]){
            return false;
            
        }
        left++;
        right--;
    }
    return true;
}

console.log(stringPallindrome('madam'));//true
console.log(stringPallindrome('naman'));//true
console.log(stringPallindrome('shubham'));//false


// With using Inbuilt functionalities
let str1="shubham";

console.log(str1.split('').reverse().join(''))//You can reverse a string