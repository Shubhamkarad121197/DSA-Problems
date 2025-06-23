class Node{
    constructor(data){
        this.data=data
        this.left=null,
        this.right=null;
    }
}


let root=new Node(5);
root.left=new Node(1);
root.right=new Node(7);
root.left.left=new Node(0);
root.right.left=new Node(6)

function postOrder(node,result=[]){
    if(node==null){
        return
    }
 
    postOrder(node.left,result);
 
    postOrder(node.right,result);
       result.push(node.data)
    
    return result
    
}

console.log(postOrder(root));