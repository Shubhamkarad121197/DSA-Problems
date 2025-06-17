let queue=[1,2,3,4];

function reverseQueue(q){
    let stack=[];
    while(q.length>0){
        stack.push(q.shift())
    }
    while(stack.length>0){
        q.push(stack.pop())
    }
    return q;
}

console.log(reverseQueue(queue))