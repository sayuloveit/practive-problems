// Given a binary tree, where an arbitary node has 2 parents i.e two nodes in the tree have the same child. Identify the defective node and remove an extra edge to fix the tree.

// Example:

// Input:
// 	   1
// 	  / \
// 	 2   3
// 	/ \ /
//    4   5

// Output:

//      1			       1
//     / \			      / \
//    2   3    or	     2   3
//   / \ 			    /   /
//  4   5		       4   5

// Explanation: We can remove either 3-5 or 2-5.
// Solution
// Follow-up 1:
// What if the tree is a BST?

// Example:

// Input:
//        3
// 	  / \
// 	 2   5
// 	/ \ /
//    1   4

// Output:
//        3
// 	  / \
// 	 2   5
// 	/   /
//    1   4

// Explanation: In this case we can only remove 2-4 because if we remove 5-4 the BST will be invalid.

// https://leetcode.com/discuss/interview-question/358676/google-remove-extra-edge

// https://leetcode.com/problems/validate-binary-search-tree/