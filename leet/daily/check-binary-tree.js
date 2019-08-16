function isBST(root) {
    return isBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isBSTUtil(node, min, max) {
    if (node === null) {
        return true;
    }

    if (node.val < min || node.val > max) {
        return false;
    }
    console.log('checking: ', node.val, min, max);
    return isBSTUtil(node.left, min, node.val - 1) && isBSTUtil(node.right, node.val + 1, max);
}

function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

// balanced
// var root = new TreeNode(4)
// var two = new TreeNode(2);
// var one = new TreeNode(1);
// var three = new TreeNode(3);
// var five = new TreeNode(5);

// root.left = two;
// root.right = five;
// two.left = one;
// two.right = three;

// console.log(isBST(root));

// NOT balanced
// var root = new TreeNode(3)
// var two = new TreeNode(2);
// var one = new TreeNode(1);
// var four = new TreeNode(4);
// var five = new TreeNode(5);

// root.left = two;
// root.right = five;
// two.left = one;
// two.right = four;

// console.log(isBST(root));