// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }

    var prev = null;
    var cur = head;
    
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        cur = cur.next;
    }

    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(2);
var link1 = new ListNode(5);
var link2 = new ListNode(3);

head.next = link1;
link1.next = link2;

console.log(JSON.stringify(removeElements(head, 5)));