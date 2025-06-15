let Input= "abbaca"
function removeAdjacentDuplicates(str) {
    let stack=[];
    for(let char of str){
        if(stack.length>0 && stack[stack.length-1]==char){
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }
    return stack.join('')
}

console.log(removeAdjacentDuplicates(Input))