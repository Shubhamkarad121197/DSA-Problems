// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let node1=new Node(10);
let node2=new Node(20);
let node3=new Node(30);


node1.next=node2;
node2.next=node3;

let head=node1

function printList(head){
    let temp=head;
    let result=[]
    while(temp!=null){
     result.push(temp.data+"=>")
        temp=temp.next;
    }
    result.push("null")
    return result.join('');
}

console.log(printList(head));