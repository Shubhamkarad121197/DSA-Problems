function createNode(data){
    return {
        data:data,
        next:null
    }
}

let head=null;

function insertAtEnd(data){
    let newNode=createNode(data);
    
    if(head==null){
        head=newNode;
        return
    }
    let current=head;
    while(current.next!=null){
        current=current.next
    }
    
    current.next=newNode;
}

function printList(){
    let current=head;
    let result='';
    while(current!=null){
        result+=current.data+"=>"
        current=current.next
    }
    
    console.log(result+null);
}
insertAtEnd(10)
insertAtEnd(20)
insertAtEnd(30)
printList()







