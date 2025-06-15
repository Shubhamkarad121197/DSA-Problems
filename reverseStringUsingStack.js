let str="Hello Shubham";

function reverseStringUsingSTL(string){
    let stack=[];
    for(let char of string){
        stack.push(char)
    }
    let reverseString=''
    while(stack.length>0){
        reverseString+=stack.pop()
    }
    return reverseString;
}

console.log(reverseStringUsingSTL(str))