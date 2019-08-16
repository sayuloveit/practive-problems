function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function inOrderIterativeTraversal(root, cb = console.log) {
    if (root == null) return;

    const stack = [];
    var node = root;

    while( node !== null || stack.length) {
        if (node !== null) {
            stack.push(node);
            node = node.left
        } else {
            node = stack.pop();
            cb(node.val);
            node = node.right;
        }
    }
}