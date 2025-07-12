// Input:  "  the sky   is blue  "
// Output: "blue is sky the"

// Input:  "hello world"
// Output: "world hello"

// Input:  "  a good   example  "
// Output: "example good a"


let str="  a good   example  ";
let splittedString=str.split(' ');
let result=[];
for(let word of splittedString){
    if(word!=''){
        result.push(word)
    }
}
console.log(result.reverse().join(' '))