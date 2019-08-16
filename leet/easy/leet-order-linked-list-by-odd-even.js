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
var oddEvenList = function(head) {
    var evenList = null;
    var node = head;
    while (node.next) {
        if (node.next.value % 2 === 0) {
            let eveNode = node.next;
            // set next ad node after even node
            node.next = node.next.next;

            if (evenList === null) {
                evenList = eveNode;
            } else {
                evenList.next = eveNode;
            }
        } else {
            node = node.next;
        }           
    }

    // put odd and even list together
    node.next = evenList;
    return node;
};

const linkedList1 = { 
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: {
                val: 5,
                next: {
                    val: 6,
                    next: null
                }
            }
        }
    }
}

oddEvenList(linkedList1)
console.log(JSON.stringify(linkedList1, undefined, 2))
