// Given a binary tree, return the inorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) {
        return;
    }

    var stack = [];
    stack.push(root);
    const results = [];
    while (stack.length) {
        node = stack.pop();

        if (node.visited) {
            results.push(node.value)
        } else {
            node.visited = true;
            stack.push(node.right);
            stack.push(node)
            stack.push(node.left);
        }
    }

    return results;
};

var tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
}
console.log(inorderTraversal(tree))
