let arr=[10,20,30,40,50];

function reverseFirstKElement(queue,k){
    let n=queue.length;
    let stack=[];


    for(let i=0;i<k;i++){
        stack.push(queue.shift())
    }
    while(stack.length>0){
        queue.push(stack.pop())
    }

    for(let i=0;i<n-k;i++){
        queue.push(queue.shift())
    }
    return queue;
}

console.log(reverseFirstKElement(arr,3))