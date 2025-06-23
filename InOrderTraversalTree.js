class Node{
    constructor(data){
        this.data=data
        this.left=null,
        this.right=null;
    }
}

let root=new Node(1);
root.right=new Node(2);
root.right.left=new Node(3);

function inOrder(node,result=[]){
    if(node==null){
        return
    }
    inOrder(node.left,result);
    result.push(node.data)
    inOrder(node.right,result);
    
    
    return result
    
}

console.log(inOrder(root)); // Output: [1, 3, 2]