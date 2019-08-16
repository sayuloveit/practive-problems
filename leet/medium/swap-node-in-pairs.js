// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var headPt = head;

    var next = head.next;
    while (next !== null) {
        next = next.next;

        head

    }

    return headPt;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);

one.next = two;
two.next = three;
three.next = four;

const res = swapPairs(one);

console.log(JSON.stringify(one, undefined, 4));

// First, we swap the first two nodes in the list, i.e. head and head.next;
// Then, we call the function self as swap(head.next.next) to swap the rest of 
// the list following the first two nodes.
// Finally, we attach the returned head of the sub-list in step (2) 
// with the two nodes swapped in step (1) to form a new linked list.