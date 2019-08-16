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
// var reverseList = function(head) {
//     var prev = null;
//     var cur = head;
    
//     while (cur !== null) {
//         var tmp = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = tmp;
//     }
    
//     return prev;
// };

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
var five = new ListNode(5);

one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;

var reverseListRecursive = function(head) {
    if (head == null || head.next == null) return head;

    var p = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

console.log(JSON.stringify(reverseListRecursive(one), undefined, 4));```