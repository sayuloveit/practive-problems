// Given the root of a binary tree, find the maximum value V for which there exists different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

// (A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.)

// Input: [8,3,10,1,6,null,14,null,null,4,7,13]
// Output: 7
// Explanation: 
// We have various ancestor-node differences, some of which are given below :
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    var obj = {
        rootVal: root.val,
        maxDiff: 0
    }
    inOrderTraversal(root, obj);
    return obj.maxDiff;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function inOrderTraversal(root, obj) {
    if (root === null) return;

    inOrderTraversal(root.left, obj);
    obj.maxDiff = Math.max(Math.abs(root.val - obj.rootVal), obj.maxDiff);
    inOrderTraversal(root.right, obj);
}

// var root = new TreeNode(8);
// var three = new TreeNode(3);
// var eight = new TreeNode(10);
// var one = new TreeNode(1);
// var six = new TreeNode(6);
// var four = new TreeNode(4);
// var seven = new TreeNode(7);
// var ten = new TreeNode(10);
// var fourteen = new TreeNode(14);
// var thirteen = new TreeNode(13);
// root.left = three;
// root.right = ten;
// three.left = one;
// three.right = six;
// six.left = four;
// six.right = seven;
// ten.right = fourteen;
// fourteen.left = thirteen;
// console.log(maxAncestorDiff(root));

// var root = new TreeNode(0);
// root.right = new TreeNode(1);
// console.log(maxAncestorDiff(root));


[1,null,2,null,0,3]
Output:
2
Expected:
3

var root = new TreeNode(1);
var two = new TreeNode(2);
var zero = new TreeNode(0);
var three = new TreeNode(3);
root.right = two;
two.left = zero;


