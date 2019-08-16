// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.


// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.


// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


 

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head) {
        var slowPointer = head;
        var fastPointer = head.next;

        while (fastPointer) {
            fastPointer = fastPointer.next;
            slowPointer = slowPointer.next;

            if (fastPointer) {
                fastPointer = fastPointer.next;
            }

            if (slowPointer === fastPointer) {
                return true;
            }
        }
    }
    return false;
};

var ListNode = function(val) {
    this.val = val;
    this.next = null;
}

var one = new ListNode(1);
var two = new ListNode(2);
one.next = two;
two.next = one;
console.log(hasCycle(one)); // true;


// var three = new ListNode(3);
// var two = new ListNode(2);
// var zero = new ListNode(0);
// var four = new ListNode(4);

// three.next = two;
// two.next = zero;
// zero.next = four;
// four.next = two;
// console.log(hasCycle(three)); // true