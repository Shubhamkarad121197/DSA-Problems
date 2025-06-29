class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkList{
    constructor(){
        this.head=null
    }
    insertAtEnd(data){
         let newNode=new Node(data);
         if(!this.head){
             this.head=newNode;
             return
         }
         let current=this.head;
         while(current.next!=null){
             current=current.next;
         }
         current.next=newNode
    }
    insertAtBeginning(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtIndex(data,index){
        let newNode=new Node(data);
        if(index<0){
            console.log('invalid index');
            return
        }
        if(index==0){
           
         newNode.next = this.head;
    this.head = newNode;
    return;
        }
        let current=this.head;
        let prev=null;
        let count=0;
        while(current!=null&& count<index){
            prev=current;
            current=current.next;
            count++;
        }
        if(count!==index){
             
            return;
        }
        prev.next=newNode;
        newNode.next=current;
    }
    
    searchElement(data){
        let current=this.head;
        let index=0;
        while(current!=null){
            if(current.data==data){
                console.log(`Element ${data} found at index ${index}`);
                return;
            }
            current=current.next;
            index++;
        }
        console.log(`Element ${data} not found`)
    }
    printList(){
        let current=this.head;
        let result=''
        while(current!=null){
            result+=current.data+'=>';
            current=current.next;
        }
        console.log(result+'null')
    }
   
}
const linkList=new LinkList();
linkList.insertAtEnd(10);
linkList.insertAtEnd(20);
linkList.insertAtBeginning(5)
linkList.insertAtEnd(30);
linkList.insertAtIndex(26,2)
linkList.searchElement(20)
linkList.printList()