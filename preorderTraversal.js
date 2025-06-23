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

function preOrder(node,result=[]){
    if(node==null){
        return
    }
    result.push(node.data)
    preOrder(node.left,result);
 
    preOrder(node.right,result);
    
    
    return result
    
}

console.log(preOrder(root));