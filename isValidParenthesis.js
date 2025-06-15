let str="(()())";

function isBalenced(str){

    let stack=[];
    for(let char of str){
        if(char=='('){
            stack.push('(')
        }
        else if(char==')'){
            if(stack.length==0){
                return false;
            }
            else{
               stack.pop()
            }

        }
    }
    return stack.length==0;
}

console.log(isBalenced(str))