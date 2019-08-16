// You are given the root of a binary tree. Invert the binary tree in place. That is, all left children should become right children, and all right children should become left children.

// Example:

//     a
//    / \
//   b   c
//  / \  /
// d   e f

// The inverted version of this tree is as follows:

//   a
//  / \
//  c  b
//  \  / \
//   f e  d

function invert(root) {
    if (root === null) return;

    var tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    
    invert(root.left);
    invert(root.right);
}

function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

var root = new TreeNode('a');
root.left = new TreeNode('b');
root.right = new TreeNode('c');
root.left.left = new TreeNode('d');
root.left.right = new TreeNode('e');
root.right.left = new TreeNode('f');

invert(root);

console.log(root);
