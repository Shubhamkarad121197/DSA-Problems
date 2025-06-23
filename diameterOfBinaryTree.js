class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Build a test tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);



function diameterOfBinaryTree(root){
    let diameter=0;
    function height(node){
        if(node==null) return 0;
        let leftHeight=height(node.left);
         let rightHeight=height(node.right);
         
         diameter=Math.max(diameter,leftHeight+rightHeight);
         return 1+Math.max(leftHeight,rightHeight)
    }
    height(root);
    return diameter;
}

console.log(diameterOfBinaryTree(root))
