// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const one = new ListNode(1); 
const three = new ListNode(3); 
const five = new ListNode(5);
one.next = three;
three.next = five;

const two = new ListNode(2);
const four = new ListNode(4);
const six = new ListNode(6);
two.next = four;
four.next = six;

const sorted = mergeTwoLists(one, two);

console.log(JSON.stringify(sorted, undefined, 4));