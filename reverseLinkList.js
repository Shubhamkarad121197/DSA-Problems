// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkList{
    constructor(){
        this.head=null;
        
    }
    
    insertAtEnd(data){
        let newNode=new Node(data);
        let current=this.head;
        if(!this.head){
            this.head=newNode;
            return;
        }
        while(current.next!=null){
            current=current.next;
        }
        current.next=newNode;
    }
    insertAtBeginning(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    reverseList(){
        let current=this.head,next=null,prev=null
        while(current!=null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev
    }
    printList(){
        
        let current=this.head;
        let result=''
        while(current!=null){
            result+=current.data+'=>'
            current=current.next;
        }
        console.log(result+'null')
    }  
}
const ll=new linkList()
ll.insertAtEnd(10)
ll.insertAtEnd(20)
ll.insertAtEnd(30)
ll.insertAtEnd(40)
ll.insertAtBeginning(1)
ll.insertAtBeginning(5)
ll.printList()
ll.reverseList()
ll.printList()